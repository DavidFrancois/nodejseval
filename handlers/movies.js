const db = require('../models');

exports.createMovie = async (req, res) => {
	try {
		await db.Movie.create(req.body);
		return res
			.status(200)
			.json('New movie created.');
	} catch(err) {
		return res.status(400).json({
			message: 'Sorry, we were not able to create a movie.',
			error: err
		});
	}
};

exports.getAllMovies = async (req, res) => {
	try {
		const movies = req.query ? await db.Movie.find(req.query) : await db.Movie.find();
		return res.status(200).json(movies);
	} catch(err) {
		return res.status(400).json({
			message: 'Sorry, we were not able to find a movies.',
			error: err
		});

	}
}

exports.getOneMovie = async (req, res) => {
	try {
        const movie = await db.Movie.findById(req.params.id);
		return res.status(200).json(movie);
	} catch(err) {
		return res.status(400).json({
			message: 'Sorry, we were not able to find a movie.',
			error: err
		});

	}

}

exports.updateOneMovie = async (req, res) => {
	try {
		const movie = await db.Movie.findByIdAndUpdate(req.params.id, {
			$set: req.body
		}, { new: true });
		return res.status(200).json(movie);
	} catch(err) {
		return res.status(400).json({
			message: 'Sorry, we were not able to update the movie.',
			error: err
		});
	}
}

exports.deleteOneMovie = async (req, res) => {
	try {
		await db.Movie.findByIdAndRemove(req.params.id);
        return res.status(200).json('Movie updated.');
	} catch(err) {
		return res.status(400).json({
			message: 'Sorry, we were not able to delete athemovie.',
			error: err
		});
	}
}

