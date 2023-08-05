import { useState } from 'react';
import './BoxScores.css'
import Card from '../UI/Card';
import BoxScoresFilter from './BoxScoresFilter';
import BoxScoreList from './BoxScoreList';
import BoxScoresChart from './BoxScoresChart';

const BoxScores = (props) => {

  const [selectedYear, setSelectedYear] = useState('2020');

  const yearChangeHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  }

  const filteredBoxScores = props.items.filter(boxScore => {
    return boxScore.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='boxscores'>
        <BoxScoresFilter
          selected={selectedYear}
          onYearChange={yearChangeHandler}
        />
        <BoxScoresChart boxScores={filteredBoxScores} />
        <BoxScoreList items={filteredBoxScores} />
      </Card>
    </div>
  )
};

export default BoxScores
