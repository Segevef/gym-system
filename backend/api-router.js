const express = require("express");

const classesRouter = require("./router/class-router");
const userRouter = require("./router/user-router");

const router = express.Router();
router.use("/classes", classesRouter);
router.use("/users", userRouter);

module.exports = router;
