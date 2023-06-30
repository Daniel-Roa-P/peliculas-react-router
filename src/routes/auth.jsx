import React from "react";
import { useUsers } from "./useUsers";
import { useNavigate, Navigate, useLocation  } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider( { children }){
    
    const { state , stateUpdaters } = useUsers();
    const { loading, getUser } = state;
    const { editDebt } = stateUpdaters;
    let usuarioValidado;

    const navigate = useNavigate();

    const [user, setUser] = React.useState(null);
    const [failedLogin, setFailedLogin]  = React.useState(false);
    
    const login = ( data ) => {

        console.log(data);
        usuarioValidado = state.getUser(data.username, data.password);
        
        console.log(usuarioValidado);

        if(usuarioValidado){

            setUser(usuarioValidado);
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

        setUser(null);
        navigate('/');

    }

    const auth = {user, failedLogin, login, logout};

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