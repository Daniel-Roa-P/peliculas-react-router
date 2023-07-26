import React from "react";
import { useUsers } from "./useUsers";
import { useNavigate, Navigate, useLocation  } from "react-router-dom";
import { session } from "./session";

const AuthContext = React.createContext();

function AuthProvider( { children } ){

    const { stateUser, stateUserUpdaters } = useUsers();
    const { getUser } = stateUser;
    const { editDebt, sincronizeUsers, includeCartArticles } = stateUserUpdaters;
    const [ sesion, setSesion ] = React.useState(null);
    const [ failedLogin, setFailedLogin ]  = React.useState(false);

    let usuarioValidado = null;
    const navigate = useNavigate();
    
    const firstLogin = (data) => {

        sincronizeUsers();
        navigate('/login', { state: { username: data.username, password: data.password } });
        
    }

    const login = ( data ) => {

        usuarioValidado = getUser(data.username, data.password);

        if(usuarioValidado){

            setSesion( new session(
                
                usuarioValidado.user , 
                usuarioValidado.isAdmin , 
                usuarioValidado.debt, 
                editDebt,
                usuarioValidado.articles,
                includeCartArticles
                
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

    const auth = {sesion, failedLogin, firstLogin, login, logout};

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