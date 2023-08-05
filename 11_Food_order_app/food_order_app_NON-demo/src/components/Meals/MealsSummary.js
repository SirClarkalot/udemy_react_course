import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
return (
  <section className={classes.summary}>
    <h2 className={classes.h2}>
      Delicous Food, Delivered to You
    </h2>
    <p>Choose your favorite meal from our broad selection of vailable meals and enjoy lunch or dinner at homne.</p>
    <p>All our meals are cooked with high-quality ingredients, just-in-time and by high experienced chefs!</p>
  </section>

)
};

export default MealsSummary
