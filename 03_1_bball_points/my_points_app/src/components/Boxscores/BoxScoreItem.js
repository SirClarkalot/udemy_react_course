
import BoxscoreDate from './BoxScoreDate';
import './BoxScoreItem.css'
import Card from '../UI/Card'

const BoxScoreItem = (props) => {

  return (
    <li>
      <Card className="boxscore-item">
        <BoxscoreDate date={props.date} />
        <div className='boxscore-item__description'>
          <h2>{props.player}</h2>
          <div className='boxscore-item__stats'>{props.points} Points</div>
          <div className='boxscore-item__stats'>{props.rebounds} Rebounds</div>
          <div className='boxscore-item__stats'>{props.assists} Assists</div>
        </div>
      </Card>
    </li>
  );
}

export default BoxScoreItem;
