import "./styles.css";

const UserInfo = (props) => {
  return (
    <div className="userInfo">
      <ul>
        <li>name:{props.name}</li>
        <li>age: {props.age}</li>
        <li>
          <button onClick={() => props.delete(props.id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
