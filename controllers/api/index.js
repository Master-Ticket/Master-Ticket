const router = require("express").Router();
const userRoutes = require("./userRoutes");
router.use("/user", userRoutes);

const events = require("./eventRoutes");
router.use("/events" , events);

module.exports = router;
