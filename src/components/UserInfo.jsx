import "./styles.css";

const UserInfo = ({ id, name, age, deleteHandler }) => {
  return (
    <div className="userInfo">
      <ul>
        <li>name:{name}</li>
        <li>age: {age}</li>
        <li>
          <button onClick={() => deleteHandler(id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
