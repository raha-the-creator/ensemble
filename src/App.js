import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./comps/MovieList";
import MovieListHeading from "./comps/MovieListHeading";
import SearchBar from "./comps/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=eb70e76d`
  
    const response = await fetch(url)
    const responseJson = await response.json()

    if(responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue]) // every time serach value changes call getMovieRequest

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App;
