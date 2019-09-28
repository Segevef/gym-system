const classesModel = require("../model/classes-collection");

async function createClass(payload) {
  await classesModel.create(payload);
  return payload;
}

async function getClasses() {
  return classesModel.find().exec();
}

async function getClassesById(classId) {
  return classesModel.findById(classId).exec();
}

async function deleteAllClasses(classId) {
  classesModel.deleteMany({}, err => {
    console.log("error occured while deleting: ", err);
  });
}

async function getNumPlacesLeft(classId) {
  const train = await classesModel.findById(classId);
  return train.maxParticipants - train.usersIds.length;
}

async function addUserToWiatingList(userId, classId) {
  const myClass = await classesModel
    .findById(classId);

  if(Array.from(myClass.waitingList).includes(userId)) return;

  await classesModel.findByIdAndUpdate(classId, {
    $push: { waitingList: userId }
  });
}

async function removeUserFromWaitingList(userId, classId) {
  await classesModel.findByIdAndUpdate(classId, {
    $pull: { waitingList: userId }
  });
}

module.exports = {
  createClass,
  getClasses,
  getClassesById,
  deleteAllClasses,
  getNumPlacesLeft,
  addUserToWiatingList,
  removeUserFromWaitingList
};
