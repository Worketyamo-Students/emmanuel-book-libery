import { Router } from "express";
import UserController from "../controllers/User.controller";
const UserEndPoints = Router();
UserEndPoints.post("/signup", UserController.creatUser);
export default UserEndPoints;
