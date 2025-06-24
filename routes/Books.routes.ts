import { Router } from "express";
import bookController from "../controllers/Book.controller";
const bookEndpoints = Router();

bookEndpoints.get("/", bookController.getAllBook);
bookEndpoints.post("/", bookController.createBook);
bookEndpoints.post("/:id", bookController.updateBook);

export default bookEndpoints;
