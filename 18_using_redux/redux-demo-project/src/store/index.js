// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'





// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'INCREASE') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'TOGGLE')
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter
//     }
//   return state
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  // value of reducer can be one reducer or many reducers
  // Can create a map of reducers
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
});

// const counterSubscriber = () => {
//   const latestState = store.getState();
// }

// store.dispatch({type: 'INCREMENT'})

export default store;
