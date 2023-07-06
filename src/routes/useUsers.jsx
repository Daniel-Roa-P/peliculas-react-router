import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useUsers () {

    const {

        item : users,
        saveItem : saveUsers,
        // sincronizeItem: sincronizeUsers,
        loading,
        error
    
      } = useLocalStorage('USERS_V1', []);
    
      const addUser = (user, password, isAdmin, debt) => {
    
        const id = newMovieId(movies);

        const newUser = [...users];
        newUser.push({

          user,
          password,
          isAdmin,
          debt

        });

        saveUsers(newUser);
      
      }

      const getUserIndex = (usuario) => {

        return users.findIndex(user => user.user === usuario);

      }

      const getUser = (usuario, clave) => {

        const userIndex = getUserIndex(usuario);

        if(users[userIndex]?.password === clave){

            return {
              
              user: users[userIndex].user ,
              isAdmin: users[userIndex].isAdmin,
              debt: users[userIndex].debt,

            };

        } 

        return null;

      }
    
      const editDebt = (name, newDebt) => {
    
        const userIndex = users.findIndex(user => user.user === name);
        const newUsers = [...users];
        newUsers[userIndex].debt = newUsers[userIndex].debt + newDebt; 
        saveUsers(newUsers);

      }

      const stateUser = {
      
        error,
        loading,
        getUserIndex,  
        getUser,
      
      }

      const stateUserUpdaters = {

        addUser,
        editDebt,

      }

    return{ stateUser, stateUserUpdaters };
        
}

function newMovieId(moviesList){

  if(!moviesList.length){

    return 1;

  }

  const idList = moviesList.map( movie => movie.id );
  const idMax = Math.max(...idList);

  return idMax + 1; 

}

export {useUsers};