const router = require("express").Router();
const User = require("../models/User");
const withAuth = require("../utils/auth");
router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const user = userData.map((market) => market.get({ plain: true }));
    res.render("main", {
      user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
router.get("/login", async (req, res) => {
  console.log();
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/register", async (req, res) => {
  res.render("register");
});
module.exports = router;
