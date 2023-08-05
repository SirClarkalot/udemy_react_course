import { useState } from "react"
import Output from "./Output";
const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText)
  }

  return (
    <div>
      <h1>Hello World</h1>
      {!changeText && <Output>It's great to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting
