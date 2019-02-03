const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movies = require('../models/Movie');

const dbName = 'lab-express-cinema';
mongoose.connect(`mongodb://localhost/${dbName}`);



router.get('/movies', (req, res, next) => {
  Movies.find()
    .then((movies) => {
      res.render('movies', { movies });
    })
    .catch((err) => {
      console.log('Error: ', err);
      next();
    });
});

module.exports = router;
