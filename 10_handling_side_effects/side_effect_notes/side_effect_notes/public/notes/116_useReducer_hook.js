// useReducer() hook

// const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

// state is the latest sate snapshot
// dispatchFn is a function that can update that state

// reducerFn
// (prevState, action) => newState
// a function that is triggered automaticcaly when action is dispatched
// It receives the lastest state snapshot, and will return new updated state


// Example from this project

// const emailReducer = (state, action) => {
//   if (action.type === 'USER_INPUT') {
//     return { value: action.val, isValid: action.val.includes('@') };
//   }
//   if (action.type === 'INPUT_BLUR') {
//     return { value: state.value, isValid: state.value.includes('@') };
//   }
//   return { value: '', isValid: false };
// };

// const [emailState, dispatchEmail] = useReducer(emailReducer, {
//   value: '',
//   isValid: false,
// });

// const emailChangeHandler = (event) => {
//   dispatchEmail({
//     type: 'USER_INPUT',
//     val: event.target.value
//   });
//   setFormIsValid(
//     event.target.value.includes('@') && passwordState.isValid
//   );
// };
