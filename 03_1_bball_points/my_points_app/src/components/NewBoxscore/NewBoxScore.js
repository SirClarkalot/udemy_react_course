import React, { useState } from "react";
import BoxScoreForm from "./BoxScoreForm";
import './NewBoxScore.css';

const NewBoxScore = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveBoxScoreDataHandler = (enteredBoxScoreData) => {
    const boxScoreData = {
      ...enteredBoxScoreData,
      id: Math.random().toString()
    };
    props.onAddBoxScore(boxScoreData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  };

  const stopEditingHandler = () => {
    setIsEditing(false)
  };


  return (
    <div className="new-boxscore">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Box Score</button>
      )}
      {isEditing && (
        <BoxScoreForm
          onSaveBoxScoreData={saveBoxScoreDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewBoxScore
