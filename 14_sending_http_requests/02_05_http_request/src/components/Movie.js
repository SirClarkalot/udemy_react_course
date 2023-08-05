import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const baseURL = 'https://image.tmdb.org/t/p/original'

  console.log(`${baseURL}${props.poster}`)
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.overview}</p>
      <div>
      <img src={`${baseURL}${props.poster}`} alt="Movie Poster" />

      </div>
    </li>
  );
};

export default Movie;
