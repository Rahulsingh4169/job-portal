// db.js 

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('YOURS URI', {

        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
