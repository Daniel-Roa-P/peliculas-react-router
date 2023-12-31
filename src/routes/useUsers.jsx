import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useUsers () {

    const {

        item : users,
        saveItem : saveUsers,
        sincronizeItem: sincronizeUsers,
        loading,
        error
    
      } = useLocalStorage('USERS_V1', []);

      const addUser = (user, password, isAdmin, debt, articles) => {

        const newUser = [...users];
        newUser.push({

          user,
          password,
          isAdmin,
          debt,
          articles

        });

        saveUsers(newUser);
      
      }

      const getUserIndex = (usuario) => {

        return users.findIndex(user => user.user === usuario);

      }

      const getUser = (usuario, clave) => {

        const userIndex = getUserIndex(usuario);

        if(users[userIndex]?.password === clave && clave !== undefined){

            return {
              
              user: users[userIndex].user ,
              isAdmin: users[userIndex].isAdmin,
              debt: users[userIndex].debt,
              articles: users[userIndex].articles,

            };

        } 

        return null;

      }
    
      const editDebt = (name, newDebt) => {
    
        const userIndex = users.findIndex(user => user.user === name);
        const newUsers = [...users];
        newUsers[userIndex].debt = newDebt; 
        saveUsers(newUsers);

      }

      const includeCartArticles = (name, articles) => {

        const userIndex = users.findIndex(user => user.user === name);
        const newUsers = [...users];
        newUsers[userIndex].articles = articles; 
        saveUsers(newUsers);

      }

      const removeCartArticles = (name, idItem) => {

        const userIndex = users.findIndex(user => user.user === name);
        const newUsers = [...users];
        const articleIndex = newUsers[userIndex].articles.findIndex(article => article.idItem === idItem);
        newUsers[userIndex].debt = newUsers[userIndex].debt - newUsers[userIndex].articles[articleIndex].price; 
        newUsers[userIndex].articles.splice(articleIndex,1); 
        saveUsers(newUsers);

      }

      const stateUser = {

        error,
        loading,
        getUserIndex,  
        getUser
      
      }

      const stateUserUpdaters = {

        addUser,
        editDebt,
        sincronizeUsers,
        includeCartArticles,
        removeCartArticles

      }

    return{ stateUser, stateUserUpdaters };
        
}

export {useUsers};

// localStorage.getItem('USERS_V1')