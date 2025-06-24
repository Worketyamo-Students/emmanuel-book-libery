import { Router } from "express";
import bookController from "../controllers/Book.controller";
const bookEndpoints = Router();

bookEndpoints.get("/", bookController.getAllBook);
bookEndpoints.post("/", bookController.createBook);
bookEndpoints.put("/:id", bookController.updateBook);
bookEndpoints.delete("/:id", bookController.deleteBook);

export default bookEndpoints;
