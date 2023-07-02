import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../routes/auth";

function HeaderMovie(props){

    const navigate = useNavigate();
    const auth = useAuth();

    const onLogin = () => {
        navigate( '/login/' );
    }
    
    const onRegister = () => {
        navigate( '/register/' );
    }

    const onLogout = () => {
        auth.logout();
    }

    return(

        <header className="bg-zinc-800">

            <div className="flex flex-row h-32 w-full">
            
                <div className="p-4 basis-1/4 h-full w-1/4 ...">

                <img className="h-full w-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TV_Azteca_Cinema_logo.svg/2560px-TV_Azteca_Cinema_logo.svg.png'></img>
                
                </div>

                <div className="p-2 basis-1/2 h-full">

                <div className="relative h-full w-full">
                    
                    {/* <div className="absolute bottom-0 right-0 h-1/5 w-full p-8">
                        
                        <input type="text" className="w-full bg-white hover:bg-slate-300 text-md font-semibold rounded-md" placeholder='Buscar' />

                    </div> */}
                    
                </div>
                
                </div>

                <div className="basis-1/4 h-full w-1/2">
                
                    <div className="relative h-full w-full" >

                    { !auth.user ? (
                    
                    <React.Fragment>

                        <div className="p-3 absolute top-0 right-0 h-1/2 w-full">

                            <button disabled={props.loading} className={`h-full w-full bg-cyan-500 text-white text-md font-semibold rounded-md ${props.loading ? "opacity-50" : "hover:bg-cyan-600"}`}  onClick={onLogin}>Iniciar sesion</button>

                        </div>

                        <div className="p-3 absolute bottom-0 right-0 h-1/2 w-full">

                            <button disabled={props.loading} className={`h-full w-full bg-white text-cyan-600 text-md font-semibold rounded-md ${props.loading ? "opacity-50" : "hover:bg-slate-300"}`} onClick={onRegister}>Crear cuenta</button>

                        </div>

                    </React.Fragment>

                    ) : (
                    
                        <React.Fragment>
    
                            <div className="p-3 absolute top-0 right-0 h-1/2 w-full">
    
                                <div class="grid grid-cols-2 gap-2 place-content-center w-full h-full ...">
                                    <div>
                                        <p class="font-semibold text-gray-900 dark:text-white text-right ">Usuario: </p>
                                    </div>

                                    <div>                                        
                                        <p class="text-gray-900 dark:text-white text-right ">{auth.user.user}</p>
                                    </div>

                                    <div>
                                        <p class="font-semibold text-gray-900 dark:text-white text-right ">Cuenta: </p>
                                    </div>

                                    <div>
                                        <p class="text-gray-900 dark:text-white text-right ">{auth.user.debt}</p>
                                    </div>
                                </div>
    
                            </div>
    
                            <div className="p-3 absolute bottom-0 right-0 h-1/2 w-full">
    
                                <button className="h-full w-full bg-red-600 hover:bg-slate-300 text-white text-md font-semibold rounded-md" onClick={onLogout}>Cerrar sesión</button>
    
                            </div>
    
                        </React.Fragment>
    
                        ) }

                    </div>
                </div>

            </div>

        </header>

    );

}

export { HeaderMovie };