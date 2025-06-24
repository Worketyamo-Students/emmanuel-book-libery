import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import chalk from "chalk";
import UserEndPoints from "./routes/User.routes";
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/users", UserEndPoints);
const port = process.env.PORT || "3000";
app.listen(port, (error) => {
  if (error) throw error;
  console.log(chalk.bgCyan(`server running on port ${port}`));
});
