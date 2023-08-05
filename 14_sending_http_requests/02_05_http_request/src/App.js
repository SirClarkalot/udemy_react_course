import React, {useState} from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import MovieForm from './components/MovieForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  const APIKey = '01d8e535061fb74a1d8e7c9695a4ef43'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${movieTitle}&page=1&include_adult=false`

  const handleTitleChange = (title) => {
    setMovieTitle(title)
  }

  function fetchMovieHandler() {
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.splice(0, 4).map(movieData => {
        return {
          id: movieData.id,
          title: movieData.title,
          releaseDate: movieData.release_date,
          overview: movieData.overview,
          poster: movieData.poster_path
        }
      })
      setMovies(transformedMovies);
    });
  };

  return (
    <React.Fragment>
      <section>
        <MovieForm onFetchMovies={fetchMovieHandler} onTitleChange={handleTitleChange}/>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
