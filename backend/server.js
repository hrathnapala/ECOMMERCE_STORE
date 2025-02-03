import express from "express";
import dotenv from "dotenv";

//db connect
import {connectDB} from './lib/db.js';

//routes
import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 9001; 


app.use(express.json());

//authentication
app.use("/api/auth", authRoutes);

app.listen(9000,() => {
    console.log(`server is running on port  ${PORT}`);
    connectDB();
});