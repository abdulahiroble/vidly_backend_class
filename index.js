import express from 'express';
const app = express();
import connectMongoDB from './startup/mongoDB.js';
import {Genre} from './models_mongoDB/genre.js';

connectMongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.get('/api/genres', async (req, res) => {
    const genres = await Genre.find()
    res.send(genres);
}
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
