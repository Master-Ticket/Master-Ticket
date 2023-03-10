const router = require("express").Router();
const User = require("../../models/User");
router.post("/", async (req, res) => {
  try { console.log(req.body)
    const userData = await User.create(req.body);
    console.log(userData)
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err)
    res.status(400);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    res.json(userData);
    if (!userData) {
      res.status(400).json({ message: "User does not exist." });
      return;
    }
    const correctPassword = await userData.checkPassword(req.body.password);
    if (!correctPassword) {
      res.status(400).json({ message: "Invalid email or password." });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ message: "Welcome!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
