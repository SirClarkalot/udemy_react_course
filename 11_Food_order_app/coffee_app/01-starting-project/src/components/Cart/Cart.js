import React, { useContext } from "react"
import DataContext from "../../Context/data-context";
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from "./CartItem";


const Cart = (props) => {

  const dataCTX = useContext(DataContext)

  const totalAmount = `$${dataCTX.totalAmount.toFixed(2)}`;
  const hasItems = dataCTX.items.length > 0

  const cartItemRemoveHandler = (id) => {
    dataCTX.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    dataCTX.addItem({...item, amount: 1})
  };

  const cartItems = (
  <ul className={classes['cart-items']}>
    {dataCTX.items.map((item) => (
    <CartItem
    key={item.id}
    price={item.price}
    name={item.name}
    amount={item.amount}
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}
    />
    ))}
    </ul>);

  return (
      <Modal onClose={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </Modal>
  )
};

export default Cart
