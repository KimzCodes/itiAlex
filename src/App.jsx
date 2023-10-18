import { useState } from "react";
import UserInfo from "./components/UserInfo";

const App = () => {
  // state
  const [users, setUsers] = useState([
    { id: 1, name: "kareem", age: 30 },
    { id: 2, name: "ahmed", age: 31 },
  ]);

  // handler to set state
  const saveHandler = () => {
    ///x1
    setUsers([...users, { id: 4, name: "esraa", age: 30 }]);
  };

  // delete callback
  const deleteHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  //loop for components
  const userList = users.map((user) => (
    <UserInfo
      id={user.id}
      name={user.name}
      age={user.age}
      key={user.id}
      delete={deleteHandler}
    />
  ));

  return (
    <div>
      <button type="button" onClick={saveHandler}>
        Insert
      </button>
      {userList}
    </div>
  );
};

export default App;
