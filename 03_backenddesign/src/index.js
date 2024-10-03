import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB: ", error);
  });
0