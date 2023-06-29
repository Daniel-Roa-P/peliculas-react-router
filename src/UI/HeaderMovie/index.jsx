import React from "react";
import { useNavigate } from 'react-router-dom';

function HeaderMovie(){

    const navigate = useNavigate();

    const onLogin = () => {
            navigate( '/login/' )
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

                    <div className="p-3 absolute top-0 right-0 h-1/2 w-full">

                    <button className="h-full w-full bg-cyan-500 hover:bg-cyan-600 text-white text-md font-semibold rounded-md" onClick={onLogin}>Iniciar sesion</button>

                    </div>

                    <div className="p-3 absolute bottom-0 right-0 h-1/2 w-full">

                    <button className="h-full w-full bg-white hover:bg-slate-300 text-cyan-600 text-md font-semibold rounded-md">Crear cuenta</button>

                    </div>

                </div>
                </div>

            </div>

        </header>

    );

}

export { HeaderMovie };