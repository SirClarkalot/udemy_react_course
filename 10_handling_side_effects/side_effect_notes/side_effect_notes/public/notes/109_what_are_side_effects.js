// What is an Effect (Sie Effect)?

// React's main job us to Render UI and React to user input
  // -evaluate and render jsx
  // manage State and Props
  // React to (User) events & inputs
  // Re-evaluate components on State & Prop changes

// Side Effects: Anything Else happening
  // Storing Data in Browser storage
  // Send HTTP request to backend
  // Set and manage timers
  // ALL THESE TASKS happen outside
  // of the normal component evaluation

// useEffect() hook

// useEffect(()=> {...}, [dependencies]);

// ()=> {...} is a finction that should be
// executed AFTER every component evaluation
// IF the dependencies changed

// [dependencies] the function only runs
// if dependecnies changed
