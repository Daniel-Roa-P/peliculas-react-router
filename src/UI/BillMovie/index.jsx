import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../routes/auth";

function BillMovie(){

    const navigate = useNavigate();
    const auth = useAuth();

    const onSubmit = (event) => {

        event.preventDefault();
        navigate('/cart/');

    }

    if(auth.sesion === null || auth?.sesion.getArticles().length === 0){

        return( 
            
            <React.Fragment>

            </React.Fragment>
        
        );

    }

    return(

        <React.Fragment>

            <footer className="sticky h-14 bottom-0 bg-gray-50 dark:bg-gray-700">
                <form className="h-full" onSubmit={onSubmit}>
                    <div className="flex flex-row h-full">
                        <div className="basis-1/2">
                            <div className="grid grid-cols-1 gap-4 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <p className="text-center font-semibold text-gray-900 dark:text-white" > Articulos en el carrito: {auth?.sesion.getArticles().length} </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="grid grid-cols-1 gap-4 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <p className="text-center font-semibold text-gray-900 dark:text-white" > Cuenta: {auth?.sesion.getDebt()} </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="grid grid-cols-1 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <button type="submit" className={`h-10 w-full text-white text-md font-semibold rounded-md bg-orange-500 hover:bg-orange-600`}>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </footer>

        </React.Fragment>

    );

}

export {BillMovie};