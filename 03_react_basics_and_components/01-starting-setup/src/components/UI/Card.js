// import React from "react";

import './Card.css'

const Card = (props) => {
  // children is a reserved name
  // value of children is the content btw to opening and closing of the component
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
