import express from "express";
import mongoose from "mongoose";
import Destinations from "./models/destinations.model.js";
import destinationsRoute from "./routes/destinations.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/destinations", destinationsRoute) 

app.get("/", (req, res) => {
  res.send("Hello World!");
});



mongoose
  .connect(
    "mongodb+srv://njagiidev:fMhQiUGX7ZV2WuDX@cluster0.y0ojaky.mongodb.net/Destinations?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
