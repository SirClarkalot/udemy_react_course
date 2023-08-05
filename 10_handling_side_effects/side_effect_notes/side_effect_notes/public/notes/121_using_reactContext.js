// First create a folder in the source folder.
// Can call the folder 'context'

// create file in that folder
// in this app we creat 'auth-context.js' because it manages login

// in the context file
// Is this syntax and usually creat an object
// React.createContext({

// });

// in our app
// import React from "react";
// const AuthContext = React.createContext({
//   isLoggedIn: false
// });
// export default AuthContext;

// To use the ctx in other files you need to do two things
// 1) Provide it
  // wrap in JSX all the components that need to listen to the ctx
  // In our app we wrap the whole app component with the ctx
  // Need to add .Provider
  // example: <AuthContext.Provider>

// 2) you need to consume it
// To consume it use <AuthContext.Consumer>
// in the component where you want to listen to that data
