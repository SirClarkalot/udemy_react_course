import { Fragment } from "react"
import AvailableDrinks from "./AvailableDrinks"
import DrinkSummary from "./DrinkSummary"


const Drinks = () => {

  return (
    <Fragment>
      <DrinkSummary />
      <AvailableDrinks />
    </Fragment>
  )

}

export default Drinks
