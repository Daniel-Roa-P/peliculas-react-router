import React from "react";
import { useNavigate, Navigate, useLocation  } from "react-router-dom";

const AuthContext = React.createContext();

const adminList = ['daniel','alejo','roa'];
const editorList = ['pera','coco','banana','narlok'];

function AuthProvider( { children }){

    const navigate = useNavigate();

    const [user, setUser] = React.useState(null);
    
    const login = ( {username, locationAfterLogin} ) => {

        const isAdmin = adminList.find(admin => admin === username);
        const isEditor = editorList.find(editor => editor === username);
        setUser({username, isAdmin, isEditor});
        navigate(locationAfterLogin);

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