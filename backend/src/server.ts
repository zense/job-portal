import express, {Application, Request, Response, NextFunction} from "express";
const app:Application = express();
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

// middleware
app.use(cors());
app.use(bodyParser.json());


// Routes

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('Hello World');
})

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    })
}
startServer();
