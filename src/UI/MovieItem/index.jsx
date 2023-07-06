import './MovieItem.css'
import React from 'react';

function MovieItem(props) {

    return(

        <div>
            
            {(props.amount > 0) ? (
            
            <div className='container'>
                
                <img className='w-full h-80 image' src={props.urlImage}/>
                <div className='middle'>
                    <div className="text" onClick={props.onInfo}>Ver detalles</div>
                </div>

            </div>) : (
            
            <div className='container'>
                
                <img className='w-full h-80 image-agotado' src={props.urlImage}/>
                <div className='middle-agotado'>
                    <div className="text-agotado">No disponible</div>
                </div>

            </div>)}

            
            
            
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