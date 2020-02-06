const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})	
	.then(() => console.log('Connected to movies DB ....'))
	.catch(err => console.error('Cannot connect to db : ' + err));

module.exports.Movie = require('./movie');

