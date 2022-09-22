import express from 'express';
import GenresRouter from './routes_mongoDB/genres.js';
import MoviesRouter from './routes_mongoDB/movies.js';

export default function (app) {
    app.use(express.json());
    app.use('/api/genres', GenresRouter);
    app.use('/api/movies', MoviesRouter);
    app.use(error);
}