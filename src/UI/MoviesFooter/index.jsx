import React from "react";
import { useNavigate } from 'react-router-dom';

function MoviesFooter(props){

    const navigate = useNavigate();

    const onSubmit = (event) => {

        event.preventDefault();
        props.submitEvent(props.amount - 1);
        navigate('/');

    }

    return(

        <React.Fragment>

            <footer className="sticky h-12 bottom-0 bg-gray-50 dark:bg-gray-700">
                <form onSubmit={onSubmit}>
                    <div className="flex flex-row h-full">
                        <div className="basis-1/2 pt-4">
                            <p className="text-center font-semibold text-gray-900 dark:text-white" > Unidades disponibles: {props.amount} </p>
                        </div>
                        <div className="basis-1/4 pt-4">
                            <p className="text-center font-semibold text-gray-900 dark:text-white" > Precio: {props.price} </p>
                        </div>
                        <div className="basis-1/4">
                            <button type="submit" className="h-full w-full bg-cyan-500 hover:bg-cyan-600 text-white text-md font-semibold rounded-md">Adquirir</button>
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