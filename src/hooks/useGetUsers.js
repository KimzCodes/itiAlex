import { useEffect, useState } from "react";

import axios from "axios";

const useGetUsers = () => {
  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5005/users");

        setUserData((prev) => [...prev, ...res.data]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("error from server");
      }
    };
    loadUsers();
  }, []);

  const deleteRequest = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5005/users/${id}`);
      const remainData = userData.filter((user) => user.id !== id);
      setUserData(remainData);
    } catch (error) {
      setError("error from server");
    }
    setLoading(false);
  };

  return [loading, error, userData, deleteRequest];
};

export default useGetUsers;
