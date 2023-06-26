import './MoviesList.css'
import React from 'react';

function MoviesList(props) {

    return(

        <div className="grid grid-cols-4 gap-4 place-content-stretch w-full p-8">
            
            {/* {props.error && props.onError()}

            {(props.loading && !props.error) && props.onLoading()}
            
            {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.error && !props.loading) && props.searchedTodos.map(props.render)} */}

            {props.searchedMovies.map(props.render)}

            {/* <ul>

            {props.children}

            </ul> */}
        
        </div>

    );

}

export {MoviesList};