import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function MoviesNav(){

    const location = useLocation(); 
    const navigate = useNavigate();

    return(

        <React.Fragment>

            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            {!(location.pathname === '/') && 
                            <li> 
                                <p className="font-semibold text-gray-900 dark:text-white hover:underline" 
                                    onClick={() => {
                            
                                        navigate( -1 );

                                    }}
                                > &#8249; Regresar </p></li>}
                            <li>
                                <p className="font-semibold text-gray-900 dark:text-white" >Seleccione la categoria deseada: </p>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Acción</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Ciencia Ficción</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Comedia</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Drama</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Terror</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Todas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </React.Fragment>

    );

}

export {MoviesNav};