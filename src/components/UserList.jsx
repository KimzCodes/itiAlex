import UserInfo from "./UserInfo";

const UserList = ({ users, deleteHandler }) => {
  const usersListRender =
    users.length > 0 ? (
      users.map((el) => (
        <UserInfo key={el.id} {...el} deleteHandler={deleteHandler} />
      ))
    ) : (
      <p>there is no data </p>
    );

  return <div>{usersListRender}</div>;
};

export default UserList;
