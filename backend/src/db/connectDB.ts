import mongoose, {Mongoose} from 'mongoose';
const connectDB = (mongoURI: string) => {
    mongoose.connect(mongoURI, {
        
    })
    .then((connection: Mongoose) => {
        console.log(`MongoDB connected: ${connection.connection.host}`);
    })
    .catch((err: Error) => {
        console.log(err);
        process.exit(1);
    })
}
export default connectDB;