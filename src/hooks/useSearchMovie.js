import { useEffect, useState } from 'react';
import axios from 'axios';

export const useSearchMovie = (name) => {
    const [movies , setMovies]  = useState([]);
    
    TheMovieDB = axios.create({
        baseURL: 'https://api.themoviedb.org/3/search',
        params: {
            api_key: '73177824b0458b2cf3c224bd42e51d77',
            language: 'es-ES',
            query: name
        }
    
    });

    const getMoviesByName = async ()=>{
        const response = await TheMovieDB.get('/movie');
        setMovies(response.data.results)
    };

    useEffect(() => {
        getMoviesByName();
    }, [])
    
    return{
        movies
    }
}
