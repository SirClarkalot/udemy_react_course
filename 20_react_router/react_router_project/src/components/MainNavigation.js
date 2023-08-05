// import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              // end above is a prop, says should only be active if the path ENDS with the above path rather than begins with
            >
              Home
            </NavLink>
            {/* navLink takes a function for className with boolean property isActive */}
          </li>
          <li>
            {/* <Link to="/products">Products</Link> */}
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
