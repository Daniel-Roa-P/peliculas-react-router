import React from "react";
import { useAuth } from "../auth";
import { Navigate, useLocation, Link } from "react-router-dom";
import { MoviesNav } from '../../UI/MoviesNav';
import { HeaderMovie } from '../../UI/HeaderMovie';

function LoginPage(){

    const auth = useAuth();
    const [data, setData] = React.useState({});

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
                <div className="flex flex-col items-center justify-center px-6 py-8">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Ingrese a su cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={login}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese su usuario</label>
                                    <input name="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required="" onChange={updateData} />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input name="password" type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={updateData} />
                                </div>
                                
                                {(auth.failedLogin) && (

                                <div>
                                    <label className="block text-center mb-2 text-sm font-medium bg-red-900 text-white-900 dark:text-white">Usuario o contraseña erroneo.</label>
                                </div>

                                )}

                                <button type="submit" className="w-full text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Ingresar</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿No tiene una cuenta? <Link className="font-medium text-primary-600 hover:underline dark:text-cyan-500" to = {`/register/`}>Crear cuenta</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}

export {LoginPage};