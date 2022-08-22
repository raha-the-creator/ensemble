import React from "react";
// import AddFavourite from "./AddFavourites";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          <div className="image-container d-flex justify-content-start m-3 px-2">
            <img src={movie.Poster} alt="movie poster" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button>Label</button>
            <div  
                className="overlay d-flex align-items-center justify-content-center"
                onClick={() => props.handleFavouritesClick(movie)}
            >
                <FavouriteComponent/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
