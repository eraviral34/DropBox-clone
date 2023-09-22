import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {

    const uri = 'mongodb+srv://dropboxuser:Test123@dropbox.2a7yreg.mongodb.net/?retryWrites=true&w=majority';

    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;