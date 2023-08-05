// creating a provider component in auth-context

// import React, { useState } from "react";
// const AuthContext = React.createContext({
//   isLoggedIn: false,
//   onLogout: () => { },
//   onLogin: () => { },
// });
// export const AuthContextProvider = (props) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const logoutHandler = () => {
//     setIsLoggedIn(false);
//   }
//   const loginHandler = () => {
//     setIsLoggedIn(true);
//   }
//   return (
//     <AuthContext.Provider value={{
//       isLoggedIn: isLoggedIn,
//       onLogout: logoutHandler,
//       onLogin: loginHandler
//     }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   )
// }
// export default AuthContext;

// ****With this provider you can clear all the login logic in App.js
