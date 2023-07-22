import React from "react";
import { useAuth } from "../auth";
import { Navigate } from "react-router-dom";
import { MoviesNav } from '../../UI/MoviesNav';
import { HeaderMovie } from '../../UI/HeaderMovie';

function CartPage(){

    const auth = useAuth();

    // const { state } = useLocation()

    // let locationAfterLogin
    // state ? (locationAfterLogin = state.locationAfterLogin) : (locationAfterLogin = '/')
    
    if(auth.user){

        return <Navigate to='/' replace/>;

    }

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {

        e.preventDefault();
        auth.login(data);

    };

    return(

        <>

            <HeaderMovie/>

            <MoviesNav/>

            <section className="bg-gray-50 dark:bg-gray-900">
                
                <div>CARRITO</div>

            </section>

        </>
    );

}

export {CartPage};