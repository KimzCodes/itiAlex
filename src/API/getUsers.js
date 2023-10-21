import axios from "axios";

const loadUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5005/users");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default loadUsers;
