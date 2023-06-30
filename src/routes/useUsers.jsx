import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useUsers () {

    console.log('sociedad');

    const {

        item : users,
        saveItem : saveUsers,
        // sincronizeItem: sincronizeUsers,
        loading,
        error
    
      } = useLocalStorage('USERS_V1', []);
    
      //  const [searchValue, setSearchValue] = React.useState('');
    
    //   let searchedMovies = [];
    
    //   if (!searchValue.length >= 1){
    
    //     searchedMovies = movies;
    
    //   } else {
    
    //     searchedMovies = movies.filter(movie => {

    //       const movieText = movie.title.toLocaleLowerCase();
    //       const searchText = searchValue.toLocaleLowerCase();
          
    //       return movieText.includes(searchText);
    
    //     })
    
    //   }
    
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

      const getUser = (usuario, clave) => {

        console.log(usuario + " " + clave)

        const userIndex = users.findIndex(user => user.user === usuario && user.password === clave);
        return users[userIndex];

      }
    
      const editDebt = (user, newDebt) => {
    
        const userIndex = users.findIndex(user => user.user === user);
        const newUsers = [...newUsers];
        newUsers[userIndex].debt = newDebt; 
        saveUsers(newUsers);

      }
    

      const state = {
      
        error,
        loading,  
        getUser,
      
      }

      const stateUpdaters = {

        addUser,
        editDebt,

      }

    return{state, stateUpdaters};
        
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