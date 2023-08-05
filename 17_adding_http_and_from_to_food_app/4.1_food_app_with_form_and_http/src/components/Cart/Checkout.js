import classes from './Checkout.module.css';
// import { useRef, useState } from 'react';
import useInput from '../../hooks/use-input';

const isEmpty = value => value.trim() !== '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput
  } = useInput(isEmpty)

  const {
    value: enteredStreet,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    isValid: enteredStreetIsValid,
    reset: resetStreetInput
  } = useInput(isEmpty)

  const {
    value: enteredPostal,
    hasError: postalInputHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    isValid: enteredPostalIsValid,
    reset: resetPostalInput
  } = useInput(isFiveChars)

  const {
    value: enteredCity,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    isValid: enteredCityIsValid,
    reset: resetCityInput
  } = useInput(isEmpty)

  const confirmHandler = (event) => {
    event.preventDefault();
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (formIsValid) {
      resetNameInput();
      resetStreetInput();
      resetPostalInput();
      resetCityInput();

      props.onSubmit({
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity
      });

      // submit cart data
    }
  };

  const nameInputClasses = `${classes.control} ${nameInputHasError ? classes.invalid : ''}`
  const streetInputClasses = `${classes.control} ${streetInputHasError ? classes.invalid : ''}`
  const postalInputClasses = `${classes.control} ${postalInputHasError ? classes.invalid : ''}`
  const cityInputClasses = `${classes.control} ${cityInputHasError ? classes.invalid : ''}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={nameInputClasses}
      >
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          value={enteredName}
        />
        {nameInputHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor='street'>Street</label>
        <input
          type='text'
          id='street'
          onBlur={streetBlurHandler}
          onChange={streetChangeHandler}
          value={enteredStreet}
        />
        {streetInputHasError && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalInputClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input
          type='text'
          id='postal'
          onBlur={postalBlurHandler}
          onChange={postalChangeHandler}
          value={enteredPostal}
        />
        {postalInputHasError && <p>Please enter a valid postal code (five characters long) !</p>}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor='city'>City</label>
        <input
          type='text'
          id='city'
          onBlur={cityBlurHandler}
          onChange={cityChangeHandler}
          value={enteredCity}
        />
        {cityInputHasError && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
