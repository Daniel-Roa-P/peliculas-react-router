
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage'
import { LoginPage } from './login/LoginPage'
import { InfoPage } from './info/InfoPage'

function App() {
  
  return( 
  
  <HashRouter>

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

              <button className="h-full w-full bg-cyan-500 hover:bg-cyan-600 text-white text-md font-semibold rounded-md">Iniciar sesion</button>

            </div>

            <div className="p-3 absolute bottom-0 right-0 h-1/2 w-full">

              <button className="h-full w-full bg-white hover:bg-slate-300 text-cyan-600 text-md font-semibold rounded-md">Crear cuenta</button>

            </div>

          </div>
        </div>

      </div>

    </header>

    <Routes>

      <Route path="/" element={<HomePage />}/>
      <Route path="/login/" element={<LoginPage />}/>
      <Route path="/info/:id" element={<InfoPage />}/>
      <Route path="*" element={<p>Not Found</p>}/>
       
    </Routes>

  </HashRouter>
  
  );

}

export {App};
