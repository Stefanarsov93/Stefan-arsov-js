const mongoose = require('mongoose');

const Movie = mongoose.model(
    'Movies', {
        name: 'String',
        premiere: Number,
        genre: 'String',
        actores: 'String',
        awards: 'String',
        director: 'String'

    },
    'Movies'
);

const addMovie = async(Movie) => {
    let m = new Movie(Movie);
    return await m.save();
};

const removeMovie = async(id) => {
    return await Movie.deleteOne({ _id: id });
};

const updateMovie = async(index, team) => {
    return await Movie.updateOne({ _id: id }, Movie);
};

const getAllMovies = async() => {
    return await Movie.find({});
};

const getOne = async(index) => {
    return await Movie.findOne({ _id: id });
};

module.exports = {
    addMovie,
    removeMovie,
    updateMovie,
    getAllMovies,
    getOne
};