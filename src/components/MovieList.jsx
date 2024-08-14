import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieList=()=> {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchMovies() {
            const response = await axios.get('https://movies-y0og.onrender.com/movies/');
            setMovies(response.data);
        }
        fetchMovies();
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    return (
        <div >
                <span id='s'><small> Click on the movie to go on the movie_page</small></span>
         <div id="movies_div">
            {movies.map(movie => (
                <div key={movie._id} onClick={() => handleMovieClick(movie._id)}>
                    <h1>{movie.name}</h1>
                    <h3>{movie.release_date}</h3>
                    <img src={movie.image_url} alt={movie.name} />
                    <h3>Rating : {movie.iMDb_rating} / 10</h3>
                    <p>Short description: {movie.s_desc}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

export default MovieList;