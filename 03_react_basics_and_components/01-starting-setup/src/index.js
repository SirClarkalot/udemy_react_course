// import React from "react";

// index.js is the first file to be executed
// npm will transform this code , so that it works when it normally would not
// example: you can import a css file into js

// importing the reactDom object
import ReactDOM from 'react-dom/client';
// react and reactDOM in the package.json form the react library

import './index.css';
//
// You can omit adding '.js' when you import
// For other types you need to add '.html'
import App from './App';

// createRoot creates the main entry point
// the 'root' comes from the <div id ='root'> in the index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// on the root object we say what should be rendered
root.render(<App />);
// This is a syntax called JSX
// The App is a component
