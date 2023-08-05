import './BoxScoreList.css'
import BoxScoreItem from './BoxScoreItem';

const BoxScoreList = (props) => {
  if (props.items.length === 0 ) {
    return <h2 className='boxscores-list__fallback'>Found no box scores.</h2>
  }

  return <ul className='boxscores-list'>
    {props.items.map((boxscore) => (
    <BoxScoreItem
      key={boxscore.id}
      date={boxscore.date}
      player={boxscore.player}
      points={boxscore.points}
      rebounds={boxscore.rebounds}
      assists={boxscore.assists}
    />
    ))}
  </ul>
};

export default BoxScoreList;
