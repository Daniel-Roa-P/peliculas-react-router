import React from "react";
import { useNavigate } from 'react-router-dom';

function MoviesFooter(props){

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();
        props.submitEvent(props.amount - 1 , Number(props.price));
        navigate('/');

    }

    const onLogin = () => {
        navigate( '/login/' );
    }

    return(

        <React.Fragment>

            <footer className="sticky h-14 bottom-0 bg-gray-50 dark:bg-gray-700">
                <form className="h-full" onSubmit={ !props.sesion ? onLogin : onSubmit}>
                    <div className="flex flex-row h-full">
                        <div className="basis-1/2">
                            <div className="grid grid-cols-1 gap-4 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <p className="text-center font-semibold text-gray-900 dark:text-white" > Unidades disponibles: {props.amount} </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="grid grid-cols-1 gap-4 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <p className="text-center font-semibold text-gray-900 dark:text-white" > Precio: {props.price} </p>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/4">
                            <div className="grid grid-cols-1 content-center h-full w-full">
                                <div className="h-full w-full">
                                    <button disabled={(props.amount < 0)} type="submit" className={`h-10 w-full text-white text-md font-semibold rounded-md ${(props.amount > 0) ? "bg-cyan-500 hover:bg-cyan-600" : "bg-gray-500 opacity-50"}`}>Adquirir</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="max-w-screen-xl px-4 py-3 mx-auto">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                                <li>
                                    <p className="font-semibold text-gray-900 dark:text-white" > Unidades disponibles: {props.amount} </p>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </form>
            </footer>

        </React.Fragment>

    );

}

export {MoviesFooter};