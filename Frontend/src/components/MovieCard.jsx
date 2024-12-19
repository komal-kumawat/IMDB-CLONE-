import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, addToWatchlist }) => {
    return (
        <div className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
        </div>
    );
};

export default MovieCard;
