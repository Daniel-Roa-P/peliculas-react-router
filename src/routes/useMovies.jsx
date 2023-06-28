import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useMovies () {

    const {

        item : movies,
        saveItem : saveMovies,
        sincronizeItem: sincronizeMovies,
        loading,
        error
    
      } = useLocalStorage('MOVIES_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
    
      const totalMovies = movies.length; 
    
      let searchedMovies = [];
    
      if (!searchValue.length >= 1){
    
        searchedMovies = movies;
    
      } else {
    
        searchedMovies = movies.filter(movie => {

          const movieText = movie.title.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          
          return movieText.includes(searchText);
    
        })
    
      }
    
      const addMovie = (title, urlImage, duration) => {
    
        const id = newMovieId(movies);

        const newMovies = [...movies];
        newMovies.push({

          id,
          title,
          gender,
          urlImage,
          description,
          duration,
          price,
          amount,
          idTrailer

        });

        saveMovies(newMovies);
      
      }

      const getMovie = (id) => {

        const movieIndex = movies.findIndex(movie => movie.id === id);
        return movies[movieIndex];

      }

      const purchaseMovie = (id) => {
    
        const movieIndex = movies.findIndex(movie => movie.id === id);
        const newMovies = [...movies];
        newMovies[movieIndex].amount = newMovies[movieIndex].amount - 1; 
        saveMovies(newMovies);

      }
    
      const editMovie= (id, newAmount) => {
    
        const movieIndex = movies.findIndex(movie => movie.id === id);
        const newMovies = [...movies];
        newMovies[movieIndex].amount = newAmount; 
        saveMovies(newMovies);

      }

      const deleteMovie = (id) => {
    
        const movieIndex = movies.findIndex(movie => movie.id === id);
        const newMovies = [...movies];
        newMovies.splice(movieIndex,1); 
        saveMovies(newMovies);

      }
    

      const state = {
      
        error,
        loading,
        searchedMovies,
        totalMovies,
        searchValue,  
        getMovie,
      
      }

      const stateUpdaters = {

        addMovie,
        purchaseMovie,
        editMovie,
        deleteMovie,
        setSearchValue,
        sincronizeMovies

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

export {useMovies};