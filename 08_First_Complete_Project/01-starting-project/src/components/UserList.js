import styles from './UserList.module.css'
import UserItem from './UserItem'


const UserList = (props) => {
  console.log("In User List")
  console.log(props.items)

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          username={user.text}
          age={user.age}
        />
      ))}
    </ul>
  )
}
export default UserList
