import { useEffect, useState } from 'react'
import MovieDB from '../api/MovieDB';

export const useMovie = () => {

    const [ peliculas, setPeliculas ] = useState();

    const getPeliculas = async () => {
        
        const nowPlayingPromise    =  MovieDB.get('/now_playing');
        const popularPromise       =  MovieDB.get('/popular');
        const topRatedPromise      =  MovieDB.get('/top_rated');
        const upcomingPromise      =  MovieDB.get('/upcoming');
        
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

