import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (query) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=af2a5868&s=${query}`
    );
    setMovies(response.data.Search || []);
  };

  const handleFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie]));
    alert(`${movie.Title} added to favorites!`);
  };

  return (
    <div>
      <SearchBar onSearch={fetchMovies} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onFavorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
