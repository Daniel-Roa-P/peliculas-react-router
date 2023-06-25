import './MoviesList.css'
import React from 'react';

function MoviesList(props) {

    return(

        <section>
            
            {/* {props.error && props.onError()}

            {(props.loading && !props.error) && props.onLoading()}
            
            {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.error && !props.loading) && props.searchedTodos.map(props.render)} */}

            {props.searchedMovies.map(props.render)}

            <ul>

            {props.children}

            </ul>
        
        </section>

    );

}

export {MoviesList};