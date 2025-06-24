import { Request, Response } from "express";
import { book } from "../generated/prisma";
import { PrismaClient } from "../generated/prisma";

const book = new PrismaClient();
const bookController = {
  getAllBook: async (req: Request, res: Response) => {
    try {
      req;
      const books = await book.book.findMany();
      res.status(200).json({ msg: "all book", data: books });
    } catch (error) {
      res.status(500).json({ msg: "intrernal error " });
    }
  },
};
export default bookController;
