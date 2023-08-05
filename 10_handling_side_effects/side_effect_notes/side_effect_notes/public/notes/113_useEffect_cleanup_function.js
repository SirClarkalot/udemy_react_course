// Checking validity for every key stroke would
// cause too much network traffic  if it was an HTTP request

// A more efficient method would be to check when a user
// stops typing. This is called debouncing

// setTimeout(() => {
// function to be executed
// }, timeout);

// useEffect(() => {
//   console.log('Checking form validity');
//   setTimeout(() => {
//     setFormIsValid(
//       enteredEmail.includes('@') && enteredPassword.trim().length > 6
//     );
//   }, 500);
// }, [enteredEmail, enteredPassword]);

// Below has a cleanup function
// useEffect(() => {
//   const identifier = setTimeout(() => {
//     console.log('Checking form validity');
//     setFormIsValid(
//       enteredEmail.includes('@') && enteredPassword.trim().length > 6
//     );
//   }, 500);

//   return () => {
//     console.log('CLEAN UP')
//     clearTimeout(identifier);
//   };
//   // above is a cleanup function

// }, [enteredEmail, enteredPassword]);
