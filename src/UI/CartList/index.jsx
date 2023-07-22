import React from 'react';

function CartList(props) {

    return(

            <React.Fragment>
            
            { props.loading ? (
                    
                <React.Fragment>

                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>

                </React.Fragment>

                ) : (
                <React.Fragment>

                    <div className='rounded-lg m-4 bg-gray-50 dark:bg-gray-700 pb-4'>

                    <div className="flex flex-row space-x-4 font-mono text-white text-lg font-bold leading-6 px-4 pt-4">

                        <div className="basis-2/12 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">Cartelera</div>
                        <div className="basis-6/12 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">Item</div>
                        <div className="basis-2/12 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">Precio</div>
                        <div className="basis-2/12 h-14 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">Cancelar</div>

                    </div>

                    {props.articles.map(props.render)}

                    </div>

                        

                </React.Fragment>
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

export {CartList};