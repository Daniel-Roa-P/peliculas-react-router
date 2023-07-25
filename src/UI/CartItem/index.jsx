import React from 'react';

function CartItem(props) {

    return(

        <div className="flex flex-row space-x-4 rounded-lg font-mono text-white text-2xl text-center leading-6 mt-4 border-2 bg-slate-900 border-zinc-800">
                
            <div className="basis-2/12 h-64 rounded-lg flex items-center justify-center">
                
                <img className='w-full h-full image rounded-lg' src={props.urlImage}/>

            </div>

            <div className="basis-6/12 h-64 flex items-center justify-center">{props.title}</div>
            <div className="basis-2/12 h-64 flex items-center justify-center">{props.price}</div>
            <div className="basis-2/12 h-64 rounded-lg flex items-center justify-center">

                <button className='rounded-lg bg-red-500 h-2/5'>

                    Retirar del carrito

                </button>    
                
            </div>

        </div>

    );

}

export {CartItem};