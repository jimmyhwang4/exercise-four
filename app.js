const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyCsg2pwgkH6_Us9zN35ww-yFg92kGyIaBM",
    authDomain: "exercise-four-aab0b.firebaseapp.com",
    databaseURL: "https://exercise-four-aab0b.firebaseio.com",
    projectId: "exercise-four-aab0b",
    storageBucket: "exercise-four-aab0b.appspot.com",
    messagingSenderId: "912621531504",
    appId: "1:912621531504:web:b9b2d2403b55cbc9e85fb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import Routes
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/posts.js");
const createRoute = require("./routes/createArticles.js");

// Create base route
app.use("/", indexRoute);
app.use("/posts", postRoute);
app.use("/create", createRoute);

// Set up app so that it runs when this file is run
app.listen(port, () =>
console.log(`Example app listening at http://localhost:${port}`)
);