import React from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";
import { MoviesNav } from '../../UI/MoviesNav';
import { HeaderMovie } from '../../UI/HeaderMovie';
import { CartList } from "../../UI/CartList";
import { CartItem } from "../../UI/CartItem";

function CartPage(){

    const auth = useAuth();
    const currentSesion = auth.sesion;

    // const { state } = useLocation()

    // let locationAfterLogin
    // state ? (locationAfterLogin = state.locationAfterLogin) : (locationAfterLogin = '/')
    
    if(currentSesion.user === undefined){

         return <Navigate to='/' replace/>;

    }

    const login = (e) => {

        e.preventDefault();
        auth.login(data);

    };

    return(

        <>

            <HeaderMovie/>

            <MoviesNav/>

            <CartList

                articles = { currentSesion.getArticles() }
                render = { article => (

                <CartItem 
                    
                    key={article.id}
                    title={article.title}
                    urlImage={article.urlImage}
                    price={article.price}
                    // onComplete = {() => purchaseMovie(movie.id)}
                    onRemove = {() => currentSesion.removeArticle(article.id)}
                    
                    // onDelete = {() => deleteMovie(movie.id)}
                
                />

                )}

                
            />

        </>
    );

}

export {CartPage};