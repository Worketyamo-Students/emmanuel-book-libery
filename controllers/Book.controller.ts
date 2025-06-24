import { Request, Response } from "express";
import { book } from "../generated/prisma";
import { PrismaClient } from "../generated/prisma";

const client = new PrismaClient();
const bookController = {
  getAllBook: async (req: Request, res: Response) => {
    try {
      req;
      const books = await client.book.findMany();
      res.status(200).json({ msg: "all book", data: books });
    } catch (error) {
      res.status(500).json({ msg: "intrernal error " });
    }
  },
  createBook: async (req: Request, res: Response) => {
    let { title, description, author, publicationDate, ISBN }: book = req.body;
    try {
      if (!title || !description || !author || !publicationDate || !ISBN) {
        res.status(400).json({ msg: "provide all the fields" });
      }
      publicationDate = parseInt(`${publicationDate}`);
      const books = await client.book.create({
        data: {
          title,
          description,
          author,
          publicationDate,
          ISBN,
        },
      });
      res.status(201).json({ msg: "book created", data: books });
    } catch (error) {
      res.status(500).json({ msg: "internal error " });
    }
  },
};
export default bookController;
