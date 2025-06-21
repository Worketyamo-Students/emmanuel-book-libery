import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { user } from "../generated/prisma";
import bcrypt from "bcrypt";
import { error } from "console";
const client = new PrismaClient();
// const emailChrck = (email: string) => {
//   const path = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (email.match(path)) {
//     console.log()
//   }
// };
const UserController = {
  creatUser: async (req: Request, res: Response) => {
    let { name, email, password }: user = req.body;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    password = `${hash}`;
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
    } catch (error) {
      res.status(400).json({
        error: error,
      });
    }
  },
  updateUser: async (req: Request, res: Response) => {
    let { name, email, password }: user = req.body;
    const { id } = req.params;
    try {
      const hash = await bcrypt.hash(password, 10);
      password = `${hash}`;
      await client.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          password,
        },
      });
      res.status(200).json({
        msg: "user updated successfully",
      });
    } catch (error) {
      res.status(400).json({
        error: error,
      });
    }
  },
  getUserProfile: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      if (!id) res.status(400).json({ error: "provide id" });
      const user = await client.user.findUnique({
        where: {
          id,
        },
      });
      if (!user) {
        res.status(400).json({
          error: "user not found",
        });
      } else {
        res.status(200).json({
          msg: "get user",
          data: user,
        });
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  },
};
export default UserController;
