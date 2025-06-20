import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { user } from "../generated/prisma";
import bcrypt from "bcrypt";
const client = new PrismaClient();
const UserController = {
  creatUser: async (req: Request, res: Response) => {
    const { name, email, password }: user = req.body;
    try {
      if (!name || !email || !password) {
        res.status(400).send("provide all the fields");
      } else {
        const user = await client.user.create({
          data: {
            name,
            email,
            password,
          },
        });
        res.status(201).json({
          msg: "user created",
          data: user,
        });
      }
    } catch (error) {}
  },
};
export default UserController;
