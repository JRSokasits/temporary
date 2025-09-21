const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
//const multer = require('multer');
//const fs = require('fs');
//const bcrypt = require("bcryptjs");
//const bodyParser = require("body-parser");
const cors = require("cors");
//app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(".", "testpublic")));

app.listen(PORT, () => {
console.log(`server running on port ${PORT}`);
})

//app.use(morgan('tiny'));
//app.use(express.json());
//app.use(express.urlencoded());
//const createAccount = require("./genericfoldername/createAccount");
//const PORT = process.env.PORT || 3000;

//MongoDB Atlas connection string
//const MONGO_URI = "mongodb+srv://jrsokasits:getanewpassword@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect('mongodb://127.0.0.1:27017/cluster0', newUrlParser, true, {useUnifiedTopology});

const MessageSchema = new mongoose.Schema({
    test: String
});
const message = mongoose.model("message", MessageSchema);
app.get('/message', async (req, res) => {
  try {
    const msg = await Message.findOne(); // get one message
    res.json({ text: msg.text });
  } catch (err) {
    res.status(500).json({ error: 'Error fetching message' });
  }
});

//get route for username and text for display page, define schema and model
const messageSchema = new mongoose.Schema({
  username: String,
  text: String
});

const Message = mongoose.model('Message', messageSchema);

// Route to get all messages
//app.get('/messages', async (req, res) => {
//  try {
//    const messages = await Message.find();
//    res.json(messages);
//  } catch (err) {
//    res.status(500).json({ error: err.message });
//  }
//});

//app.get('/message', async (req, res) => {
//    try {
//        const msg = await Message.findOne().sort({ _username: -1 });
//        res.json({ tes:msg ? msg.text : "no messages yet" });
//    } catch (err) {
//        res.status(500).json({ error: 'error finding message' });
//    }
//});

//post route insert new message
app.post('/message', async (req, res) => {
    try {
    const newMsg = new Message({ text: req.body.text });
    await newMsg.save();
    res.json({ success: true, message: 'Message saved!' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving message' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


// Middleware
//app.use(bodyParser.json());

// Connect to MongoDB
//mongoose.connect(MONGO_URI, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//})
//.then(() => console.log("Connected to MongoDB Atlas"))
//.catch((err) => console.error("MongoDB connection error:", err));

//register block (create credentials, hash and salt credentials, upload to database)
//app.put ?
//app.post("/api/register", async (req, res) => {
//const { username, password } = req.body;
//const hashedPassword = await bcrypt.hash(password, 10);

//const newUser = new User({ username, password: hashedPassword });
//await newUser.save();

//res.json({ success: true, message: "User registered" });
//});

//app.listen(5000, () => console.log("Server running on http://localhost:5000"));  change port?

//login block (verify credentials against database, return no or open data edit page)
//use req res next, request verification, positive response opens editing page
//app.get username, password
//request data block (reading database, return user profile, get middleware)
//exports = function() {
//const mongodb = context.services.get("mongodb-atlas");
//const itemsCollection = mongodb.db("cluster0name").collection("name");
//const purchasesCollection = mongodb.db("cluster0name").collection("anothername");
//}

//request to database for username ?
//router.get('/:username', async(req, res) =>
//    try {
//      const user = await User.findByUsername(req.params.username);
//      if (!user) return res.status(404).json({ error: no account });
//      res.json(user);
//  } catch (err) {
//      res.status(500).json({ error: err.message });
//  }
//});

//request to database for password ?
//router.get('/:password', async(req, res) =>
//    try {
//      const pass = await User.findByPassword(req.params.password);
//      if (!password) retun res.status(404)json({ error: incorrect password });
//      res.json(password);
//  } catch (err) {
//      res.status(500).json({ erro: err.message });
//  }
//});

//request to database for new account ?
//router.post('/', async(req, res) => {
//  try {
//      const { username, password } = req.body;
//      const newUser = new User({ username, password });
//      await.newUser.save();
//      res.status(201).json(newUser);
//  } catch (err) {
//      res.status(400).json({ error: err.message });
//  };
//});

//send text to database ?
//router.put('/', async(req, res) =>
//  try {
//     const newMsg = new Message({ text:req.body.text });
//     await new Msg.save();
//     res.json({ success:true, message: 'Message saved' });
//  } catch (err) { 
//    res.status(500).json({ error: 'Error saving message' });
//  }
//}

//send image to storage folder
//const storage = multer.diskStorage({
//  destination: (req, file, cb) => {
    // Default folder
//   let uploadPath = 'uploads/';

    // Use client-provided folder name (e.g., "profiles", "blogs")
//    if (req.body.folder) {
//      uploadPath = path.join('uploads', req.body.folder);
//
      // Create folder if it doesn’t exist
//      if (!fs.existsSync(uploadPath)) {
//        fs.mkdirSync(uploadPath, { recursive: true });
//      }
//    }
//
//    cb(null, uploadPath);
//  },
//  filename: (req, file, cb) => {
//    cb(null, Date.now() + path.extname(file.originalname));
//  }
//});

//const upload = multer({ storage });

// Upload route
//app.post('/upload', upload.single('image'), (req, res) => {
//  res.json({
//    message: 'Image uploaded successfully!',
//    filePath: `/uploads/${req.body.folder}/${req.file.filename}`
//  });
//});

// Serve static files
//app.use('/uploads', express.static('uploads'));

//app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));


//edit and save data block (upload to database user profile)
//use 

//delete block (remove credentials from database)
