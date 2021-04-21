if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express(); 
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const moviesRouter = require('./movies/movies.router');
const theatersRouter = require('./theaters/theaters.router');
const reviewsRouter = require('./reviews/reviews.router');

app.use(cors({origin: `https://project-we-love-movies-1-pzillah.vercel.app`})); // whitelist instead of installing CORS chrome extension
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
