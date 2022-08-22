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
    const url = "http://www.omdbapi.com/?s=Resident Evil&apikey=eb70e76d"
  
    const response = await fetch(url)
    const responseJson = await response.json()

    console.log(responseJson);
    setMovies(responseJson.Search)
  }

  useEffect(() => {
    getMovieRequest()
  }, [])

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center">
        <MovieListHeading heading="Movies" />
        <h2>11111</h2>
        {/* <SearchBar /> */}
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default App;
