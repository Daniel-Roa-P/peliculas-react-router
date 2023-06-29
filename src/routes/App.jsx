
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage'
import { LoginPage } from './login/LoginPage'
import { InfoPage } from './info/InfoPage'
import { AuthRoute, AuthProvider } from "./auth";
import { RegisterPage } from './register/RegisterPage';

function App() {
  
  return( 
  
  <HashRouter>

    <AuthProvider>

      <Routes>

        <Route path="/" element={<HomePage />}/>
        
        <Route path="/info/:id" element={<InfoPage />}/>
        
        <Route path="/login/" element={<LoginPage />}/>

        <Route path="/register/" element={<RegisterPage />}/>
        
        <Route path="*" element={<p>Not Found</p>}/>
        
        
      </Routes>

    </AuthProvider>

  </HashRouter>
  
  );

}

export {App};
