import { Router } from "express";
import bookController from "../controllers/Book.controller";
const bookEndpoints = Router();

bookEndpoints.get("/", bookController.getAllBook);

export default bookEndpoints;
