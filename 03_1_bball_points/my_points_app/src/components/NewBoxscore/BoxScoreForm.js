
import React, { useState } from "react";
import './BoxScoreForm.css'

const BoxScoreForm = (props) => {

  const [enteredPlayer, setEnteredPlayer] = useState('');
  const [enteredPoints, setEnteredPoints] = useState('');
  const [enteredRebounds, setEnteredRebounds] = useState('');
  const [enteredAssists, setEnteredAssists] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredPlayer: '',
  //   enteredPoints: '',
  //   enteredRebounds: '',
  //   enteredAssists: '',
  //   enteredDate: ''
  // });


  const playerChangeHandler = (event) => {
    setEnteredPlayer(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredPlayer: event.target.value };
    // });
  };

  const pointsChangeHandler = (event) => {
    setEnteredPoints(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredPoints: event.target.value };
    // });
  };

  const reboundsChangeHandler = (event) => {
    setEnteredRebounds(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredRebounds: event.target.value };
    // });
  };

  const assistsChangeHandler = (event) => {
    setEnteredAssists(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAssists: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const boxScoreData = {
      player: enteredPlayer,
      points: +enteredPoints,
      rebounds: enteredRebounds,
      assists: enteredAssists,
      date: new Date(enteredDate)
    }

    props.onSaveBoxScoreData(boxScoreData);
    setEnteredPlayer('');
    setEnteredPoints('');
    setEnteredRebounds('');
    setEnteredAssists('');
    setEnteredDate('');
  };

  return <form onSubmit={submitHandler}>
    <div className="new-boxscore__controls">
      <div className="new-boxscore__control">
        <label>Player</label>
        <input type='text' value={enteredPlayer} onChange={playerChangeHandler} />
      </div>
      <div className="new-boxscore__control">
        <label>Points</label>
        <input type='number' value={enteredPoints}  min='0' step="0" onChange={pointsChangeHandler} />
      </div>
      <div className="new-boxscore__control">
        <label>Rebounds</label>
        <input type='number' value={enteredRebounds} min='0' step="0" onChange={reboundsChangeHandler} />
      </div>
      <div className="new-boxscore__control">
        <label>Assists</label>
        <input type='number' value={enteredAssists} min='0' step="0" onChange={assistsChangeHandler} />
      </div>
      <div className="new-boxscore__control">
        <label>Date</label>
        <input type='date' value={enteredDate} min="1920-01-01" max="2023-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-boxscore__actions">
      <button type="button" onClick={props.onCancel} >Cancel</button>
      <button type="submit" >Add Box Score</button>
    </div>
  </form>
};

export default BoxScoreForm
