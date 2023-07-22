import React from 'react';

function CartItem(props) {

    return(

        <div className="flex flex-row space-x-4 font-mono text-white text-lg font-bold leading-6 px-4 pt-4">

            <div className="basis-2/12 h-64 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">
                
                <img className='w-full h-full image rounded-lg' src={props.urlImage}/>

            </div>

            <div className="basis-6/12 h-64 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">{props.title}</div>
            <div className="basis-2/12 h-64 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">{props.price}</div>
            <div className="basis-2/12 h-64 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg">{props.title}</div>

        </div>

    );

}

export {CartItem};