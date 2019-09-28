const userModel = require("../model/users-collection");
const classesModel = require("../model/classes-collection");
const nodemailer = require("nodemailer");

async function createUser(payload) {
  await userModel.create(payload);
  return payload;
}

async function getAvailableClasses(userId) {
  const classes = await classesModel.find({
    usersIds: { $ne: userId }
  });
  return classes;
}

async function getMyClasses(userId) {
  const myClasses = await classesModel.find({
    usersIds: { $eq: userId }
  });

  return myClasses;
}

async function getUserById(userId) {
  return userModel.findById(userId).exec();
}

async function getUsers() {
  return userModel.find().exec();
}

async function deleteUser(userId) {
  await userModel.deleteOne({
    users: { $eq: userId }
  });
}

async function bookClass(userId, classId) {
  await classesModel.findByIdAndUpdate(classId, {
    $push: { usersIds: userId }
  });
  await userModel.findByIdAndUpdate(userId, {
    $push: { userClasses: classId }
  });
}

async function cancelClass(userId, classId) {
  await classesModel.findByIdAndUpdate(classId, {
    $pull: { usersIds: userId }
  });
  await userModel.findByIdAndUpdate(userId, {
    $pull: { userClasses: classId }
  });

  // handling the waiting list - add first user in line to the class
  const curClass = await classesModel
    .findById(classId);

    const curWaitingListLength = Array.from(curClass.waitingList).length;

  if (curWaitingListLength > 0) {

    const newUserId = Array.from(curClass.waitingList).shift();

    await classesModel.findByIdAndUpdate(classId, {
      $pop: { waitingList: -1 } //remove the first element
    });
    await userModel.findByIdAndUpdate(newUserId, {
      $push: { userClasses: classId }
    });
    await classesModel.findByIdAndUpdate(classId, {
      $push: { usersIds: newUserId }
    });

    // send email to the user that move from the waiting list to the class
    let transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "facabe3611c623",
        pass: "725ff884c5f96b"
      }
    });

    const newUserEmail = await userModel.findById(newUserId, "email");
    const newUserName = await userModel.findById(newUserId, "firstName");
    const className = await classesModel.findById(classId, "className");

    const message = {
      from: "support@wix-gym.com",
      to: newUserEmail,
      subject: `You Have Signed Up To ${className} Class!`,
      html: `<h3> Dear ${newUserName} </h3> 
              <h2>You Have Signed Up!</h2> 
              <p>
                We saw that you want to take part of our ${className} class.
                Good news! New places just vacated and you were the first on the waiting list! 
                You are know sign to the class and we will be happy to see you. 
              </p>
              <p>
	              Best Regards,
              </p>
              <p>
	              Wix GYM team
              </p>`
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
}

module.exports = {
  createUser,
  getAvailableClasses,
  getMyClasses,
  getUsers,
  getUserById,
  deleteUser,
  bookClass,
  cancelClass
};
