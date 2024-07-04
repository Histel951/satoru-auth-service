import mongoose from "mongoose";
import * as process from "process";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb://mongodb:${process.env['MONGO_PORT']}`,
            {
                autoIndex: false,
                dbName: process.env['MONGO_DB'],
                family: 4,
                maxPoolSize: 10,
                pass: process.env['MONGO_PASSWORD'],
                user: process.env['MONGO_USERNAME'],
            }
        );
    } catch (error) {
        console.error('Connection error:', error);
    }
};

mongoose.connection.on('error', console.error.bind(console, 'Connection error:'));

export default connectToDatabase;
