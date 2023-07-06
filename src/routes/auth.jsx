import React from "react";
import { useUsers } from "./useUsers";
import { useNavigate, Navigate, useLocation  } from "react-router-dom";
import { session } from "./session";

const AuthContext = React.createContext();

function AuthProvider( { children }){
    
    const { stateUser, stateUserUpdaters } = useUsers();
    const [ sesion, setSesion ] = React.useState(null);
    const { getUser } = stateUser;
    const { editDebt } = stateUserUpdaters;
    const [failedLogin, setFailedLogin]  = React.useState(false);

    let usuarioValidado = null;

    const navigate = useNavigate();
    
    const login = ( data ) => {

        usuarioValidado = getUser(data.username, data.password);
        
        console.log(usuarioValidado);

        if(usuarioValidado){

            setSesion( new session(
                
                usuarioValidado.user , 
                usuarioValidado.isAdmin , 
                usuarioValidado.debt, 
                editDebt
                
                )    
            );
            
            setFailedLogin(false);
            navigate('/');

        } else {

            setFailedLogin(true);
            navigate('/login');

        };

        // const isAdmin = adminList.find(admin => admin === username);
        // const isEditor = editorList.find(editor => editor === username);
        // setUser({username, isAdmin, isEditor});
        // navigate(locationAfterLogin);

    }

    const logout = () => {

        setSesion(null);
        navigate('/');

    }

    const auth = {sesion, failedLogin, login, logout};

    return(

    <AuthContext.Provider value={auth}>

        {children}

    </AuthContext.Provider>

    );

}

function useAuth() {

    const auth = React.useContext(AuthContext);
    return auth;

}

function AuthRoute({children}){

    const auth = useAuth();
    const { pathname } = useLocation();

    console.log(pathname);

    if(!auth.user){

        return <Navigate to = '/login' state={{ locationAfterLogin: pathname  }}/>;

    }

    return children;

}

export {
    AuthProvider,
    AuthRoute,
    useAuth
}