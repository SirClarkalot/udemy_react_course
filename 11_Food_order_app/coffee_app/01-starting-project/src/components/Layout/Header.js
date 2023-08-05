import {Fragment} from "react"
import coffeeImage from '../../assets/coffee.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Drinks</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={coffeeImage} alt='different cups of coffee'/>
      </div>
    </Fragment>
  )
}

export default Header
