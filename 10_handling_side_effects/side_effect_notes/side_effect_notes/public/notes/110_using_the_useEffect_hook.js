// Without useEffect a user is logged out automatically when the page refreshes

// Need to store the log in data so that it persists the reload
// if data is correct we can login user automatically

// We will use local storage from the browser
//example =  localStorage.setItem('isLoggedIn', '1');
// 'isLoggedIn' is the identifier
// '1' is the value that you store
// is a key value pair where key is 'isLoggedIn'
// and the value is : '1'

// useEffect prevents the app from constantly re rendering
// and creating an infinite loop

// useEffect(() => {
//   const storedUserData = localStorage.getItem('isLoggedIn');

//   if (storedUserData === '1') {
//     setIsLoggedIn(true);
//   }

// }, []);

// This useEffect has no dependencies
// Will only run once bc only runs when dependencies change, and there are no dependencies
