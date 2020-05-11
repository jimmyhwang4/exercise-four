const express = require("express");

const router = express.Router();

const firebase = require("firebase");

// Initialize Firestore Database
const db = firebase.firestore();

// Get single blog post
const documentToGet = "sample-post";

// Reference to Collections
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
    blogposts
        .doc(documentToGet)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                return res.send(doc.data());
            } else {
                // doc.data() will be undefined in this case
                return res.send("No such document!")
            }
        })
        .catch(function(error) {
            console.log("Error:", error);
            return res.send(error)
        });
   
});

module.exports = router;