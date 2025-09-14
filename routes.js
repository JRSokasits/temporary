const express = require('express');
const User = require('../model/model');
const router = express.Router();

// GET route for display page
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.render('display', { message: null, error: null, users });
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).render('display', { error: 'Error fetching user data', users: [] });
  }
});

// POST route for sending new user info to database
//router.post('/user', async (req, res) => {
//try {
//  const newUser = new User({
//    username: req.body.username,
//    password: req.body.password,
//    responses: req.body.responses,
//  });
//  await newUser.save();
//  res.render('', { message: 'User data saved successfully!', error: null, users: await User.find() });
//} catch (err) {
//  console.error('Error saving user data:', err);
//  res.status(500).render('index', { error: 'Error saving user data', message: null, users: [] });
//}
//});

//module.exports = router;

//POST route to send credentials to database for verification
//app.post("/api/login", async (req, res) => {
//  const { username, password } = req.body;

//  try {
//    const user = await User.findOne({ username });
//    if (!user) {
//      return res.json({ success: false, message: "User not found" });
//    }

//    const isMatch = await bcrypt.compare(password, user.password);
//    if (!isMatch) {
//      return res.json({ success: false, message: "Invalid password" });
//    }

//    res.json({ success: true });
//  } catch (err) {
//    console.error(err);
//    res.status(500).json({ success: false, message: "Server error" });
//  }
//});

//const bodyParser = require("body-parser");