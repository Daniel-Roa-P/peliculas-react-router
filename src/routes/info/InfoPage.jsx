import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMovies } from "../useMovies";
import { MoviesNav } from "../../UI/MoviesNav";
import { MoviesFooter } from "../../UI/MoviesFooter";

function InfoPage(){

    const location = useLocation(); 
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters } = useMovies();
    const { loading , getMovie } = state;
    const { editMovie } = stateUpdaters;

    let movieTrailer, movieTitle, movieImage, movieGender, movieDescription, movieDuration, movieAmount, moviePrice;

     if(loading){

        return (

            <React.Fragment>
                <MoviesNav/>
                <p> Cargando ... </p>
            </React.Fragment>
        
        );

    } else {

        const movie = getMovie(id);
        movieTitle = movie.title;
        movieImage = movie.urlImage;
        movieTrailer = movie.idTrailer;
        movieGender = movie.gender;
        movieDescription = movie.description;
        movieDuration = movie.duration;
        movieAmount = movie.amount;
        moviePrice = movie.price; 

    }

    return(

        <React.Fragment>

            <MoviesNav/>

            <div className="flex flex-row h-auto">
            
                <div className="basis-1/4 p-4">
                    <img className='w-full h-full image' src={movieImage}/>
                </div>

                <div className="basis-3/4 h-96 h-auto m-4 bg-blue-300">
                    <p className="text-6xl m-4"> {movieTitle} </p>
                    <p className="text-2xl mb-4 mx-4"> {movieDescription} </p>
                    <p className="text-2xl mb-4 mx-4"> Genero: {movieGender} </p>
                    <p className="text-2xl mb-4 mx-4"> Duracion: {movieDuration} </p>
                </div>

            </div> 

            <div className="px-4 pb-4">
                <iframe className="w-full h-96" src={`https://www.youtube.com/embed/${movieTrailer}`} ></iframe>
            </div>

            <MoviesFooter
                amount = {movieAmount}
                price = {moviePrice}
                submitEvent = {(newAmount) => editMovie(id, newAmount)}
            />

        </React.Fragment>

    );

}

export {InfoPage};