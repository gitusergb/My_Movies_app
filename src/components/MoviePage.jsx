import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Movie_page.css';

const MoviePage=()=> {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useNavigate();
   

    useEffect(() => {
        async function fetchMovie() {
            try {
            const response = await axios.get(`https://movies-y0og.onrender.com/movies/${id}`);
            setMovie(response.data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
        }
        fetchMovie();
    }, [id]);

  

    if (!movie) return <div>Loading...</div>;

    return (
        <div id="movie-container">
            <h1 id="movie-title">{movie.name}</h1>
            <h3 id="movie-release-date">Release Date: {movie.release_date}</h3>
            <img id="movie-poster" src={movie.image_url} alt={movie.name} />
            <h3 id="movie-rating">Rating : {movie.iMDb_rating} / 10</h3>
            <hr />
            <div id="movie-description">
            <span>Description</span>
            <p>Short description: {movie.s_desc}</p>
            <p>Long description: {movie.l_desc}</p>
            </div>
            <button id="back-button" onClick={() => history(`/`)}>
                Back 
            </button>
        </div>

        
    );
}

export default MoviePage;