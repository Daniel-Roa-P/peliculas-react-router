import React from "react";
import { useMovies } from '../useMovies';
import { MoviesList } from '../../UI/MoviesList';
import { MovieSearch } from '../../UI/MovieSearch';
import { MovieItem } from '../../UI/MovieItem';
import { useNavigate } from 'react-router-dom';
import { MoviesNav } from '../../UI/MoviesNav';

function HomePage(){

    const navigate = useNavigate();
  
    const { state , stateUpdaters } = useMovies();

    const {

        error,
        loading,
        searchedMovies,
        totalMovies,
        searchValue,  
      
      } = state;
    
      const {
    
        purchaseMovie,
        deleteMovie,
        setSearchValue,
        sincronizeMovies
    
      } = stateUpdaters;

    return(

        <React.Fragment>

            <MoviesNav/>

            <MovieSearch 
            
            searchValue = {searchValue} 
            setSearchValue = {setSearchValue}

            />
            
            <MoviesList

                error = {error}
                loading = {loading}
                searchedMovies = {searchedMovies}
                totalMovies = {totalMovies}
                searchText = {searchValue}
                // onError = { () => <TodosError/>}
                // onLoading = { () => <TodosLoading/>}
                // onEmptyTodos = { () => <EmptyTodos/>}
                onEmptySearchResults = { (searchText) => <EmptySearchResults searchText = {searchText}/>}
                render = { movie => (

                <MovieItem 
                    
                    key={movie.id}
                    title={movie.title}
                    gender={movie.gender}
                    urlImage={movie.urlImage}
                    description={movie.description}
                    duration={movie.duration}
                    price={movie.price}
                    amount={movie.amount}
                    // onComplete = {() => purchaseMovie(movie.id)}
                    onInfo = {() => {
                    
                            navigate( '/info/' + movie.id )

                        }
                    }
                    
                    // onDelete = {() => deleteMovie(movie.id)}
                
                />

                )}

            />

        </React.Fragment>

    );

}

export {HomePage};