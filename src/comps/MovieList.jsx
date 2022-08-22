import React from 'react'

const MovieList = (props) => {
  return (
    <>
        {props.movies.map((movie, index)=> <div>
            <div className='d-flex justify-content-start m-3 px-2'>
                <img src={movie.Poster} alt="movie poster" />
            </div>
        </div>)}
    </>
    )
}

export default MovieList