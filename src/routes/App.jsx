
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage'
import { LoginPage } from './login/LoginPage'
import { InfoPage } from './info/InfoPage'

function App() {
  
  return( 
  
  <HashRouter>

    <header class="bg-zinc-800">

      <div class="flex flex-row h-32 w-full">
    
        <div class="p-4 basis-1/4 h-full w-1/4 ...">

          <img class="h-full w-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TV_Azteca_Cinema_logo.svg/2560px-TV_Azteca_Cinema_logo.svg.png'></img>
        
        </div>

        <div class="p-2 basis-1/2 h-full">

          <div class="relative h-full w-full">
              
              <div class="absolute bottom-0 right-0 h-1/5 w-full p-8">
                
                <input type="text" class="w-full bg-white hover:bg-slate-300 text-md font-semibold rounded-md" placeholder='Buscar' />

              </div>
              
          </div>
          
        </div>

        <div class="basis-1/4 h-full w-1/2">
          <div class="relative h-full w-full" >

            <div class="p-3 absolute top-0 right-0 h-1/2 w-full">

              <button class="h-full w-full bg-cyan-500 hover:bg-cyan-600 text-white text-md font-semibold rounded-md">Iniciar sesion</button>

            </div>

            <div class="p-3 absolute bottom-0 right-0 h-1/2 w-full">

              <button class="h-full w-full bg-white hover:bg-slate-300 text-cyan-600 text-md font-semibold rounded-md">Crear cuenta</button>

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
