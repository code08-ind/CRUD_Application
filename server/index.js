import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

// making it a express app
const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', Routes);

const PORT = 8000;

// saving in the env file so that they remain safe and it provides security to important data and credentials
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// setting up connection
Connection(username, password);

// listening a port and making it run
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
