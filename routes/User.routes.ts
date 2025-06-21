import { Router } from "express";
import UserController from "../controllers/User.controller";
const UserEndPoints = Router();
UserEndPoints.post("/signup", UserController.creatUser);
UserEndPoints.get("/profile/:id", UserController.getUserProfile);
UserEndPoints.put("/profile/:id", UserController.updateUser);
export default UserEndPoints;
