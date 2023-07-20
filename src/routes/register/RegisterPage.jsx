import { useState, useEffect, useRef} from "react";
import { useAuth } from "../auth";
import { useRegister } from "../register";
import { Navigate, useLocation, Link } from "react-router-dom";
import { MoviesNav } from '../../UI/MoviesNav';
import { HeaderMovie } from '../../UI/HeaderMovie';

function RegisterPage(){

    const auth = useAuth();
    const register = useRegister();
    const [data, setData] = useState({});
    const [advertencia, setAdvertencia] = useState('');

    const isMounted = useRef(false);

    useEffect(() => {


        if(!isMounted.current){

            isMounted.current = true;

        } else {

            if(!register.verifyLengthUsername(data.username)){

                setAdvertencia("El nombre de usuario debe ser mayor a 4 caracteres.");

            } else {

                if(!register.verifyValidUsername(data.username)){

                    setAdvertencia("El nombre de usuario escrito ya está en uso.");
        
                } else {
        
                    if(!register.verifyValidPassword(data.password, data.password_confirm)){

                        setAdvertencia("Las contaseñas no coinciden.");
            
                    } else {

                        setAdvertencia("");

                    }

                }

            }

        }

    }, [data]);
    
    if(auth.user){

        return <Navigate to='/' replace/>;

    }

    const updateData = e => {
        
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const onRegister = (e) => {

        e.preventDefault();

        if(advertencia.length === 0 && (Object.keys(data).length !== 0 ) && register.verifyValidUsername(data.username)){

            register.registerNewUser(data.username, data.password);
            login(e);

        } else {

            setAdvertencia("Ingrese bien los datos para continuar.");

        }

    };

    const login = (e) => {

        e.preventDefault();
        auth.firstLogin(data);

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
                                Cree su cuenta
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={onRegister}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingrese un nombre de usuario</label>
                                    <input name="username" onChange={event => updateData(event)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required=""/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                    <input name="password" onChange={updateData} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                                    <input name="password_confirm" onChange={updateData} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>

                                {(advertencia.length !== 0) && (

                                <div>
                                    <label className="block text-center mb-2 text-sm font-medium bg-red-900 text-white-900 dark:text-white"> {advertencia} </label>
                                </div>

                                )}

                                <button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear cuenta</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    ¿Ya tiene una cuenta? <Link className="font-medium text-primary-600 hover:underline dark:text-cyan-500" to = {`/login/`}>Inicie sesión</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export {RegisterPage};