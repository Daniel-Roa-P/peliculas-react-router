import React from 'react';
import './MovieSearch.css';

function MovieSearch({ searchValue, setSearchValue, loading }) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return(

        <div className="flex items-center justify-center shadow-lg bg-zinc-800 p-4">
            
            <div className="w-1/2">

                <input 
                className="text-center w-full bg-white hover:bg-slate-300 text-md font-semibold rounded-md" 
                placeholder='Buscar' 
                value={searchValue}
                onChange={onSearchValueChange}
                disabled={loading}
                
                />

            </div>
           

        </div>


        );

}

export {MovieSearch};