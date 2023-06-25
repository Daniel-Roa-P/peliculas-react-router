import './MovieItem.css'
import React from 'react';

function MovieItem(props) {

    return(

        <section>
            
            {/* {props.error && props.onError()}

            {(props.loading && !props.error) && props.onLoading()}
            
            {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.error && !props.loading) && props.searchedTodos.map(props.render)} */}

            {props.searchedTodos.map(props.render)}

            <ul>

            {props.children}

            </ul>
        
        </section>

    );

}

export {MovieItem};