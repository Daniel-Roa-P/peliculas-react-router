import React from "react";
import { useMovies } from '../useMovies';
import { MoviesList } from '../../UI/MoviesList';
import { MovieSearch } from '../../UI/MovieSearch';
import { MovieItem } from '../../UI/MovieItem';
import { useNavigate } from 'react-router-dom';

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

            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <p className="font-semibold text-gray-900 dark:text-white" >Seleccione la categoria deseada: </p>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Acción</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Ciencia Ficción</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Comedia</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Drama</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Terror</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Todas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

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
                    onComplete = {() => purchaseMovie(movie.id)}
                    onEdit={() => {
                    
                    navigate(
                        '/edit/' + movie.id,
                        { state: {movie} }
                        )

                    }
                    }
                    onDelete = {() => deleteMovie(movie.id)}
                
                />

                )}

            />

        </React.Fragment>

    );

}

export {HomePage};