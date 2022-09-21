import React, { useEffect, useState } from 'react'
import PeliculaBD from '../api/PeliculaBD';

export const usePelicula = () => {

    const [ peliculasEnCine, setPeliculasEnCine ] = useState([]);

    const getPeliculas = async () => {
        const resp = await PeliculaBD.get('/now_playing');
        const peliculas = resp.data.results;
        setPeliculasEnCine(peliculas);
    };

    useEffect(() => {
       getPeliculas();

    }, []);

    return (
        peliculasEnCine
    )
}
