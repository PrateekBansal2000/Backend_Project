// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});
connectDB();

/*
******* Connect to MongoDB(First approach) 
*******In this we are using IIFE approach of javascript to call function immediately********

import { express } from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}!`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/
