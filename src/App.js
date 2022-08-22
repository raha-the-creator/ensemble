import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./comps/MovieList";
import MovieListHeading from "./comps/MovieListHeading";
import SearchBar from "./comps/SearchBar";
import AddFavourites from "./comps/AddFavourites";
import RemoveFavourites from "./comps/RemoveFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eb70e76d`
  
    const response = await fetch(url)
    const responseJson = await response.json()

    // console.log(responseJson);

    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]) // every time serach value changes call getMovieRequest

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdID !== movie.imdbID
    )

    setFavourites(newFavouriteList)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
          movies={movies}
          favouriteComponent={AddFavourites} 
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList 
          movies={favourites}
          favouriteComponent={RemoveFavourites} 
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  )
}

export default App;
