import classes from './MovieForm.module.css';

const MovieForm = (props) => {

  const changeHandler = (event) => {
    const title  = event.target.value
    props.onTitleChange(title)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFetchMovies()
    };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <input name='movieTitle' type='text' onChange={changeHandler}></input>
        <button  onClick={props.fetchMovieHandler}>Fetch Movies</button>
      </form>
    </div>
  )
}

export default MovieForm;
