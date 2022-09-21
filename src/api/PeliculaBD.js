import axios from 'axios';

PeliculaBD = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '73177824b0458b2cf3c224bd42e51d77',
        language: 'es-ES'
    }

});

export default PeliculaBD;