import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import chalk from "chalk";

const app = express();
const port = process.env.PORT || "3000";
app.listen(port, (error) => {
  if (error) throw error;
  console.log(chalk.bgCyan(`server running on port ${port}`));
});
