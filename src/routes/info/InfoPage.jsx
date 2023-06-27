import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useMovies } from "../useMovies";
import { MoviesNav } from "../../UI/MoviesNav";

function InfoPage(){

    const location = useLocation(); 
    const params = useParams();
    const id = Number(params.id);

    const { state, stateUpdaters } = useMovies();
    const { loading , getMovie } = state;
    // const { editTodo } = stateUpdaters;

    let movieTrailer, movieTitle, movieImage, movieGender, movieDescription, movieDuration;

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

    }

    return(

        <React.Fragment>

            <MoviesNav/>

            <div className="flex flex-row">
            
                <div className="basis-1/4 p-4">
                    <img className='w-full h-96 image' src={movieImage}/>
                </div>

                <div className="basis-3/4 p-4">
                    <p className="text-6xl"> {movieTitle} </p>
                    <p className="text-2xl"> {movieDescription} </p>
                    <p className="text-2xl"> {movieGender} </p>
                    <p className="text-2xl"> {movieDuration} </p>
                </div>

            </div> 

            <div className="p-4">
                <iframe className="w-full h-96" src={`https://www.youtube.com/embed/${movieTrailer}`} ></iframe>
            </div>

        </React.Fragment>

    );

}

export {InfoPage};