
import React, {useState} from 'react';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([
    {text: "Sean",
    age: '34',
    id: 1}
  ]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUsers((prevUsers) => {
      const newUser = { text: enteredUsername, age: enteredAge, id: Math.random().toString() }
      return [newUser, ...prevUsers]
    })
  };


  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList items = {users}/>
    </div>
  );
}

export default App;
