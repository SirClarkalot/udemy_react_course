
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {


  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie className={classes['movie']}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          overview={movie.overview}
          poster={movie.poster}
        />
      ))}
    </ul>
  );
};



export default MovieList;
