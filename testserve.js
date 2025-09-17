const express = require('express');
//const mongoose = require('mongoose');
//const bcrypt = require("bcryptjs");
//const cors = require("cors");
const path = require('path');
//const PORT = 3000;
const createAccount = require("./genericfoldername/createAccount");

const app = express();
const PORT = process.env.PORT || 3000;

//MongoDB Atlas connection string
const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("MongoDB connection error:", err));

//register block (create credentials, upload to database)
//
//app.post("/api/register", async (req, res) => {
//const { username, password } = req.body;
//const hashedPassword = await bcrypt.hash(password, 10);

//const newUser = new User({ username, password: hashedPassword });
//await newUser.save();

//res.json({ success: true, message: "User registered" });
//});

//app.listen(5000, () => console.log("Server running on http://localhost:5000"));  change port?

//login block (verify credentials against database, return no or open data edit page)

//request data block (reading database, return user profile, get middleware)
//exports = function() {
//const mongodb = context.services.get("mongodb-atlas");
//const itemsCollection = mongodb.db("cluster0name").collection("name");
//const purchasesCollection = mongodb.db("cluster0name").collection("anothername");
//}

//edit and save data block (upload to database user profile)

//delete block (remove credentials from database)
