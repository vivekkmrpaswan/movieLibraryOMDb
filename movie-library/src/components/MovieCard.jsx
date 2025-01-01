const MovieCard = ({ movie, onFavorite }) => {
    const { Title, Poster, Year, imdbID } = movie;
  
    return (
      <div className="movie-card">
        <img src={Poster} alt={Title} />
        <h3>{Title}</h3>
        <p>{Year}</p>
        <button onClick={() => onFavorite(movie)}>Favorite</button>
      </div>
    );
  };
  
  export default MovieCard;
  