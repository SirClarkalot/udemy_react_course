import './Card.css'

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className= {classes}>{props.children}</div>;
}
// props.children will return the content between the opening and closing tag of your custom Card component
export default Card
