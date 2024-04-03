import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser'

import mongoose from 'mongoose';
import cors from "cors"
const mongoString = process.env.DATABASE_URL

const app = express()

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const port = 3000

// Global
app.use(bodyParser.json())
app.use(cors())

//Send info that page is not existed
app.use(function (req, res) {
  res.status(404).send({ 'status': '404', 'message': 'Page not found' });
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on: ${port}`)
})
