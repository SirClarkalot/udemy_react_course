// import BoxScoreItem from "./components/BoxScoreItem";
import BoxScores from "./components/Boxscores/BoxScores";
import NewBoxScore from "./components/NewBoxscore/NewBoxScore";
import { useState } from "react";

const DummyBoxscores = [
  {
    id: 'bs1',
    date: new Date(2021, 2, 28),
    opponent: 'Timberwolves',
    team: 'Miami Heat',
    player: 'Jimmy Butler',
    points: 29,
    rebounds: 9,
    assists: 5,
  },

  {
    id: 'bs2',
    date: new Date(2022, 4, 5),
    opponent: 'Warriors',
    team: 'Mavs',
    player: 'Luka Doncic',
    points: 34,
    rebounds: 7,
    assists: 12,
  },

  {
    id: 'bs3',
    date: new Date(2019, 11, 15),
    opponent: 'Hawks',
    team: 'Magic',
    player: 'Mo Bamba',
    points: 12,
    rebounds: 14,
    assists: 2,
  },

  {
    id: 'bs4',
    date: new Date(2020, 9, 28),
    opponent: 'Celtics',
    team: 'Miami Heat',
    player: 'Bam Adebeyo',
    points: 32,
    rebounds: 13,
    assists: 5,
  }
]

const App = () => {

  const [boxScores, setBoxScores] = useState(DummyBoxscores)

  const addBoxScoreHandler = (boxScore) => {
    setBoxScores((prevBoxScores) => {
      console.log(prevBoxScores);
      console.log(boxScore)
      return [boxScore, ...prevBoxScores];
    });
  };

  return (
    <div>
      <NewBoxScore onAddBoxScore = {addBoxScoreHandler} />
      <BoxScores items = {boxScores}  />
    </div>
  );
}

export default App;

// create a new component called boxscore that is rendered in app.js
