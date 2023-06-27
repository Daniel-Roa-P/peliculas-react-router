import './MovieItem.css'
import React from 'react';

function MovieItem(props) {

    // console.log(props.error);
    // console.log(props.loading);

    return(

        <div>
            
            <div className='container'>
                
                <img className='w-full h-80 image' src={props.urlImage}/>
                <div className='middle' onClick={() => console.log(props.title)}>
                    <div className="text" onClick={props.onInfo}>Ver detalles</div>
                </div>

            </div>
            
            
            <h1 className='text-center bg-blue-300 border-blue-300 font-bold border-8 mt-2'>
                
                {props.title}
                
            </h1>

            <div className='bg-blue-300 border-blue-300 border-8 mt-2'>

                <p>
                    Duracion: {props.duration}
                </p>

                <p>
                    Precio: {props.price}
                </p>

                <p>

                    Genero: {props.gender}

                </p>

                <p>
                    Unidades disponibles: {props.amount}
                </p>

            </div>

        </div>

    );

}

export {MovieItem};