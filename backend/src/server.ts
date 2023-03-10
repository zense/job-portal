import express, {Application, Request, Response, NextFunction} from "express";
const app:Application = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
// Database
import connectDB from "./db/connectDB";
// routes
import authRoute from "./routes/authRoute";
import postRoute from "./routes/postRoute";

// middleware
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('Hello World');
})

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    const connectionString: string = process.env.MONGO_URI || "mongodb://localhost:27017";
    connectDB(connectionString);
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
}
startServer();
