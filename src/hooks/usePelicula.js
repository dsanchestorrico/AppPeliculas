import React, { useEffect, useState } from 'react'
import PeliculaBD from '../api/PeliculaBD';

// export const usePelicula = () => {

//     const [ peliculasEnCine, setPeliculasEnCine ] = useState([]);

//     const getPeliculas = async () => {
//         const resp = await PeliculaBD.get('/now_playing');
//         const peliculas = resp.data.results;
//         setPeliculasEnCine(peliculas);
//     };

//     useEffect(() => {
//        getPeliculas();

//     }, []);

//     return (
//         peliculasEnCine
//     )
// }
export const usePelicula = () => {

    const [ peliculas, setPeliculas ] = useState();

    const getPeliculas = async () => {
        
        const nowPlayingPromise    =  PeliculaBD.get('/now_playing');
        const popularPromise       =  PeliculaBD.get('/popular');
        const topRatedPromise      =  PeliculaBD.get('/top_rated');
        const upcomingPromise      =  PeliculaBD.get('/upcoming');
        
        const respuestas = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setPeliculas({
            nowPlaying: respuestas[0].data.results,
            popular:    respuestas[1].data.results,
            topRated:   respuestas[2].data.results,
            upcoming:   respuestas[3].data.results 
        });

    };

    useEffect(() => {
       getPeliculas();

    }, []);

    return (
        { ...peliculas}
    )
}

