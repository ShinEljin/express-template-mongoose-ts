import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import router from "./router/router";

dotenv.config();
const app = express();

//json for raw jason, url encoded for form encoded
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Server is running");
});

let port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    console.log("Connected to database.");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB. Error: " + err);
  });
