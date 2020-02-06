const express = require('express');
const socksRoutes = require('./routes/moviesdb');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/movies', moviesRoutes);

app.listen(port, () => console.log(`Server listening on port:${port}`));

