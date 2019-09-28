import axios from "axios";

export const UserService = () => {
  const getUsers = () => axios.get("/api/users/");
  const getClasses = userId => axios.get(`/api/users/${userId}/classes`);
  const getMyClasses = userId => axios.get(`/api/users/${userId}/myclasses`);
  const getUserById = userId => axios.get(`/api/users/${userId}/`);
  const bookClass = (userId, classId) => {
    axios.post(`/api/users/${userId}/book/`, {
      classId
    });
    return true;
  };
  const cancelClass = (userId, classId) => {
    axios.post(`/api/users/${userId}/cancel`, {
      classId
    });
    return true;
  };

  const addUser = ({userName, password, firstName, lastName, email, userClasses}) => {
    axios.post("/api/users/add", {
      userName,
      password,
      firstName,
      lastName,
      email,
      userClasses,
    });
  };
  return {
    getUsers,
    getClasses,
    getMyClasses,
    getUserById,
    bookClass,
    cancelClass,
    addUser
  };
};
