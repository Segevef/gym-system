const express = require("express");
const userService = require("../sevices/user-service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (e) {
    res.status(500).send(e);
  }

});

router.get("/:id/classes", async (req, res) => {
  const { id: userId } = req.params;
  try {
    const classes = await userService.getAvailableClasses(userId);
    res.json(classes);
  }catch (e) {
    res.status(500).send(e);
  }

});

router.get("/:id/myclasses", async (req, res) => {
  try {
    const {id: userId} = req.params;
    const userClasses = await userService.getMyClasses(userId);
    res.json(userClasses);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id: userId} = req.params;
    const user = await userService.getUserById(userId);
    res.json(user);
  }catch (e) {

  }
});

router.post("/:id/book", async (req, res) => {
  try {
    const { id: userId } = req.params;
    const { classId } = req.body;
    await userService.bookClass(userId, classId);
    res.json({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/add", async (req, res) => {
  try{
    const user = await userService.createUser(req.body);
    res.json({ success: true, user });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/:id/cancel", async (req, res) => {
  try{
    const { id: userId } = req.params;
    const { classId } = req.body;
    await userService.cancelClass(userId, classId);
    res.json({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
