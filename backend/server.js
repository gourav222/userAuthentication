import app from "./app.js";
import { config } from "dotenv";
import { connectDatabase } from "./config/dataBase.js";
import cors from "cors";
config({ path: "./config/config.env" });

connectDatabase();
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
