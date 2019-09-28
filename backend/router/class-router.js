const express = require("express");
const classService = require("../sevices/class-service");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const train = await classService.createClass(req.body);
    res.json({ success: true, train });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/all", async (req, res) => {
  try {
    const classes = await classService.getClasses();
    res.json(classes);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/:id/one", async (req, res) => {
  try {
    const { id: classId } = req.params;
    const classes = await classService.getClassesById(classId);
    res.json(classes);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id/remove", async (req, res) => {
  try {
    const { id: classId } = req.params;
    classService.deleteAllClasses(classId);
    res.json({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/:id/user/join", async (req, res) => {
  try {
    const { id: classId } = req.params;
    const { userId } = req.body;
    await classService.addUserToWiatingList(userId, classId);
    res.json({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/:id/user/remove", async (req, res) => {
  try {
    const { id: classId } = req.params;
    const { userId } = req.body;
    await classService.removeUserFromWaitingList(userId, classId);
    res.json({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
