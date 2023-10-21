import useGetUsers from "./hooks/useGetUsers";
import UserList from "./components/UserList";
import Loading from "./components/Loading";

const App = () => {
  const [loading, error, userData, deleteRequest] = useGetUsers();

  const deleteHandler = (id) => {
    deleteRequest(id);
  };

  return (
    <div>
      <h3>Users List:</h3>
      <Loading loading={loading} error={error}>
        <UserList users={userData} deleteHandler={deleteHandler} />
      </Loading>
    </div>
  );
};

export default App;
