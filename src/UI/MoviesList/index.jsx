import './MoviesList.css'
import React from 'react';

function MoviesList(props) {

    return(

            <React.Fragment>
            
            { props.loading ? (
                    
                <React.Fragment>

                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>

                </React.Fragment>

                ) : (
                
                    <div className="grid grid-cols-4 gap-4 place-content-stretch w-full p-8">
                    {props.searchedMovies.map(props.render)}
                    </div>
                ) 
            
            }


            {/* {props.error && props.onError()}

            {(props.loading && !props.error) && props.onLoading()}
            
            {(!props.loading && !props.totalTodos && !props.error) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.error && !props.loading) && props.searchedTodos.map(props.render)}

            {props.searchedMovies.map(props.render)}

            <ul>

            {props.children}

            </ul> */}

    </React.Fragment>

    );

}

export {MoviesList};