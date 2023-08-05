import './BoxScoreDate.css'

const BoxscoreDate = (props) => {

  // console.log(props)

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='boxscore-date'>
      <div className='boxscore-date__month'>{month}</div>
      <div className='boxscore-date__day'>{day}</div>
      <div className='boxscore-date__year'>{year}</div>
    </div>
  );
}

export default BoxscoreDate
