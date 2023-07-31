import React from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";
import { MoviesNav } from '../../UI/MoviesNav';
import { HeaderMovie } from '../../UI/HeaderMovie';
import { CartList } from "../../UI/CartList";
import { CartItem } from "../../UI/CartItem";
import { useMovies } from "../useMovies";

function CartPage(){

    const auth = useAuth();

    const { state, stateUpdaters } = useMovies();
    const { loading } = state;
    const { editMovie } = stateUpdaters;

    const retirarPelicula = (id) => {

        auth.sesion.getRemoveArticule(id);
        editMovie(id, 1);

    }

    // const { state } = useLocation()

    // let locationAfterLogin
    // state ? (locationAfterLogin = state.locationAfterLogin) : (locationAfterLogin = '/')
    
    if(auth.sesion === null){

         return <Navigate to='/' replace/>;

    }

    return(

        <>

            <HeaderMovie/>

            <MoviesNav/>

            <CartList

                articles = { auth.sesion.getArticles() }
                render = { article => (

                <CartItem 
                    
                    key={article.id}
                    title={article.title}
                    urlImage={article.urlImage}
                    price={article.price}
                    // onComplete = {() => purchaseMovie(movie.id)}
                    onRemove = {() => retirarPelicula(article.id) }
                    // onDelete = {() => deleteMovie(movie.id)}
                
                />

                )}

                
            />

        </>
    );

}

export {CartPage};