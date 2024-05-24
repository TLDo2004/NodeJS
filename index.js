//import { initializeApp } from "firebase/app";
//import functions from 'firebase-functions'

import 'dotenv/config'
import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from "cors"
const mongoString = process.env.DATABASE_URL

import wordRoute from './routes/wordRoute.js'
import userRoute from './routes/userRoute.js'
import quizRoute from './routes/quizRoute.js'
import topicRoute from './routes/topicRoute.js'
import revisionRoute from './routes/revisionRoute.js'

// Global
// REPLACE YOUR MONGO URI CONNECTION STRING IN .env FILE
const port = 3000

const app = express()
app.use(bodyParser.json())
app.use(cors({ origin: true }))

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database connected");
});

// const firebaseConfig = {
//   apiKey: "AIzaSyB3GSjffVWDic3Pb0a65FotyNQCoXeuxco",
//   authDomain: "android-eng.firebaseapp.com",
//   projectId: "android-eng",
//   storageBucket: "android-eng.appspot.com",
//   messagingSenderId: "135062509077",
//   appId: "1:135062509077:web:1467381709853848de201c"
// };

//const myApp = initializeApp(firebaseConfig);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/words', wordRoute)
app.use('/api/users', userRoute)
app.use('/api/quizzes', quizRoute)
app.use('/api/topics', topicRoute)
app.use('/api/revisions', revisionRoute)


//Send info that page is not existed
app.use(function (req, res) {
  res.status(404).send({ 'status': '404', 'message': 'Page not found' });
});
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on: ${port}`)
})
//export const myApp = functions.https.onRequest(app);
