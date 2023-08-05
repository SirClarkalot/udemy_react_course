import classes from './AvailableDrinks.module.css'
import DrinkItem from './DrinkItem/DrinkItem';
import Card from '../UI/Card'

const DUMMY_DRINKS = [
  {
    id: 1,
    name: "Espresso",
    price: 2.50,
    description: "A concentrated coffee made by forcing hot water under high pressure through finely ground coffee beans."
  },
  {
    id: 2,
    name: "Latte",
    price: 3.50,
    description: "A coffee drink made with espresso and steamed milk, topped with a thin layer of foam."
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 3.75,
    description: "A coffee drink made with espresso, steamed milk, and a layer of foam, traditionally served in a small cup."
  },
  {
    id: 4,
    name: "Mocha",
    price: 4.25,
    description: "A coffee drink made with espresso, steamed milk, chocolate syrup or powder, and topped with whipped cream."
  },
  {
    id: 5,
    name: "Americano",
    price: 2.75,
    description: "A coffee drink made by diluting an espresso with hot water, creating a similar strength to brewed coffee but different in taste."
  },
  {
    id: 6,
    name: "Cold Brew",
    price: 4.00,
    description: "A method of coffee brewing that involves steeping coarsely ground beans in cold water for an extended period of time."
  }
];


const AvailableDrinks = () => {
  const drinkList = DUMMY_DRINKS.map((drink) => (
    <DrinkItem
      id={drink.id}
      key={drink.id}
      name={drink.name}
      description={drink.description}
      price={drink.price}
    />
  ));

  return (
    <section className={classes.drinks}>
      <ul>
        <Card>
          {drinkList}
        </Card>
      </ul>
    </section>
  );
};

export default AvailableDrinks
