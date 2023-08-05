import './UserItem.css'

const UserItem = (props) => {

  return (
    <li className="user-item">
      <div>{props.username}</div>
      <div>{props.age}</div>
    </li>
  )
}

export default UserItem
