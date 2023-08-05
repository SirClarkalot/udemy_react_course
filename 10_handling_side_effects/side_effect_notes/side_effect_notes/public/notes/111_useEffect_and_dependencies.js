// Can use useEffect w/ dependencies to restucture
// validation logic in the login.js component
// so that there is one place to check if form is valid


// useEffect(() => {
//   setFormIsValid(
//     enteredEmail.includes('@') && enteredPassword.trim().length > 6
//   );

// }, [setFormIsValid, enteredEmail, enteredPassword]);

// RULE: dependencies are only things included in your function
