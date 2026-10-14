const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());

// ===============================
// ROUTES
// ===============================

app.use("/students", studentRoutes);

// ===============================
// MONGODB ATLAS CONNECTION
// ===============================

const MONGO_URI =
  "mongodb://manasvinilesh_db_user:90ct197s@ac-zc3sail-shard-00-00.z03m62k.mongodb.net:27017,ac-zc3sail-shard-00-01.z03m62k.mongodb.net:27017,ac-zc3sail-shard-00-02.z03m62k.mongodb.net:27017/?ssl=true&replicaSet=atlas-a3ix5s-shard-0&authSource=admin&appName=Cluster0"

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });