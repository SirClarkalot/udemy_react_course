import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUserName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)."
      })
      return;
    }
    // console.log(enteredUserName, enteredAge)
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      { error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={enteredUserName} onChange={usernameChangeHandler} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
          <Button type='submit'>Add User</Button >
        </form>
      </Card>
    </div>
  )
};

export default AddUser;
