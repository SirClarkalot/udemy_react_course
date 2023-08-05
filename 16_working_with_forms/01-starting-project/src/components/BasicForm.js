import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '');

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value=>value.includes('@'));

  const emailInputClasses = emailInputHasError
  ? 'form-control invalid'
  : 'form-control'

  let formIsValid = false
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault()
    if (formIsValid) {
      resetFirstName();
      resetLastName();
      resetEmailInput();
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className="error-text">enter a valid first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && <p className="error-text">enter a valid last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
         type='text'
         id='name'
         onChange={emailChangeHandler}
         onBlur={emailBlurHandler}
         value={enteredEmail}
         />
        {emailInputHasError && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
