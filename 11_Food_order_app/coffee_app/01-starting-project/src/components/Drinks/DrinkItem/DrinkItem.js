import { useContext } from 'react';
import DataContext from '../../../Context/data-context';
import classes from './DrinkItem.module.css'
import DrinkItemForm from './DrinkItemForm';



const DrinkItem = (props) => {

  const dataCTX = useContext(DataContext);

  const addToCartHandler = amount => {
    dataCTX.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };


  return (
    <li className={classes.drink}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <DrinkItemForm id={props.id} onAddToCart={addToCartHandler}></DrinkItemForm>
      </div>
    </li>
  )
};

export default DrinkItem
