// A component in React is just a JS function

// generally name the funct the same as the file


import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // a special variable is created
  // useState returns a function too
  // useState returns an array, first value is the data, second is the updating function

  // You should use "Handler" if its a function that's called by an event

  return (
    // We need to use ClassName instead of class to use css classes
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

// To use the component we add an export statement
export default ExpenseItem;

// We want to import this function in our App.js file

// To create a custom component:
//  1. create a component(a function that returns some HTML code)
//  2. Export it
//  3. Import it where you want to use it
//  4. Use it like an HTML element (with uppercase char)

// Passing data via Props
// props stands for properties
