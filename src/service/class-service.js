import axios from "axios";

export const ClassService = () => {
  const getAllclasses = () => {
    const classes = axios.get("/api/classes/all");
    return classes.data;
  }

  const getClassById = (classId) => {
    const classes = axios.get(`/api/classs/${classId}/one`);
    return classes.data;
  }

  const addUserToWaitingList = (classId, userId) => {
    axios.post(`/api/classes/${classId}/user/join`, {
      userId
    });
    return true;
  }

  const removeUserFromWaitingList = (classId, userId) => {
    axios.post(`/api/classes/${classId}/user/remove`, {
      userId
    });
    return true;
  }

  const addClass = ({className, description, price, duration, instructorName, timeSlots, maxParticipants, usersIds, waitingList, classImage}) => {
    axios.post("/api/classes/add", {
      className,
      description,
      price,
      duration,
      instructorName,
      timeSlots,
      maxParticipants,
      usersIds,
      waitingList,
      classImage,
    });
  }
  return {
    getAllclasses,
    getClassById,
    addUserToWaitingList,
    removeUserFromWaitingList,
    addClass
  }
}
