const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET movies page */
router.get('/movies', (req, res, next) => {
	Movie.find().then((allMovies) => {
		console.log('All movies from DB retrieved', allMovies);
		res.render('movies', { movies: allMovies });
	});
});

router.get('/movies/:movieId', (req, res, next) => {
	const { movieId } = req.params;

	Movie.findById(movieId).then((selectedMovie) => {
		console.log('This is the movie you are looking for', selectedMovie);
		res.render('movie-details', { movie: selectedMovie });
	});
});

module.exports = router;
