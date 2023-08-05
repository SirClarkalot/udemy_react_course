import React, { useState } from 'react';
import Button from './Button';
import styles from './UserInput.module.css'

const UserInput = (props) => {

  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')


  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    // console.log(username);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (username.trim().length !== 0) {
      // console.log(username)
    }
    props.onAddUser(username, age);
  };

  return (
    <div>
      <form onSubmit={submitChangeHandler}>
        <div className={`${styles['form-control']}`}>
          <label> Username</label>
          <input type='text' onChange={usernameChangeHandler} />

          <label>Age (Years)</label>
          <input type='number' onChange={ageChangeHandler} />
        </div>
        <Button type="submit"></Button>
      </form>
    </div>
  );

}

export default UserInput
