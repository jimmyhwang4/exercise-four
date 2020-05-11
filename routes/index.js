const express = require("express");

const router = express.Router();

const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Reference to Collections
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
    // Create Empty Array
    const blogpostsArray = [];
    // Get Blog Posts
    blogposts
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // Push document into array every time the query loops over existing articles
                blogpostsArray.push(doc.data());
            });
            return res.send(blogpostsArray);
        })
        .catch(function(error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

module.exports = router;