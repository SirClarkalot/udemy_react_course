import React from 'react';

import './BoxScoresFilter.css';

const BoxScoresFilter = (props) => {

  // const [enteredYear, setEnteredYear] = useState('');

  const yearChangeHandler = (event) => {
    props.onYearChange(event.target.value)
  }


  return (
    <div className='boxscores-filter'>
      <div className='boxscores-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>

        </select>
      </div>
    </div>
  );
};

export default BoxScoresFilter;
