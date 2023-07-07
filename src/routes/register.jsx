import React from "react";
import { useUsers } from "./useUsers";
import { useNavigate  } from "react-router-dom";

function useRegister () { 

    const { stateUser, stateUserUpdaters } = useUsers();
    const { getUserIndex } = stateUser;
    const { addUser } = stateUserUpdaters;
    const navigate = useNavigate();

    const verifyLengthUsername = (username) => {

        if( username?.length > 4 ){

            return true;

        }

        return false;

    }

    const verifyValidUsername = (username) => {

        if( getUserIndex(username) < 0 ){

            return true;

        }

        return false;

    }

    const verifyValidPassword = (password1 , password2) => {

        if( password1 === password2 ){

            return true;

        }

        return false;

    }

    const registerNewUser = (username , password) => {

        addUser(username, password, false, 0);
        navigate('/login');
        

    }

    return{ verifyLengthUsername , verifyValidUsername, verifyValidPassword, registerNewUser };

}

export { useRegister };