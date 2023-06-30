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
    
    const login = ( data ) => {

        console.log(data);
        usuarioValidado = state.getUser(data.username, data.password);
        
        if(usuarioValidado){

            setUser(usuarioValidado);
            navigate('/');

        } else {

            console.log('el usuario no existe')

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

    const auth = {user, login, logout};

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