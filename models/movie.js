const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 400
	},
	producer: {
		type: String,
        required: true,
        minLength: 8,
		maxLength: 300
	},
	colors: {
		type: [String],
		required: true,
		enum: [
            'comedy',
            'action',
            'thriller',
            'drama',
            'family',
            'fantasy',
            'sf',
            'musical',
            'western'
        ]
	},
	views: {
		type: Number,
		default: 0,
        min: 0,
        required: true
	},
	releaseDate: {
		type: Date,
		default: Date.now
	},
	isOscarWinner: {
		type: Boolean,
		default: false
	}
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

