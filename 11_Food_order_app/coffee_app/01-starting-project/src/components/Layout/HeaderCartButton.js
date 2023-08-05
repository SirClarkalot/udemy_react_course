import React, {useContext, useEffect, useState} from "react"
import DataContext from "../../Context/data-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props) => {

  const dataCTX = useContext(DataContext)
  const { items } = dataCTX

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false)
      }, 300);
      return () => {
        clearTimeout(timer)
      };
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton
