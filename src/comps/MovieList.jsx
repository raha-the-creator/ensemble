import React from "react";
// import AddFavourite from "./AddFavourites";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
    <div className="movies">
      {props.movies.map((movie, index) => (
        <div className="card">
          <div className="about">
            <div className="poster">
                <img src={movie.Poster} alt="movie poster" />
            </div>
            <div className="text">
                <h4>Title: {movie.Title}</h4>
                <p>Release year: {movie.Year}</p>
                <button>Learn More!!!</button>
            </div>
          </div>

          <div className="btn" onClick={() => props.handleFavouritesClick(movie)}>
            <FavouriteComponent/>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MovieList;
