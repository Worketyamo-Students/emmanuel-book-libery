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
  updateBook: async (req: Request, res: Response) => {
    let { title, description, author, publicationDate, ISBN }: book = req.body;
    const { id } = req.params;
    try {
      const update = await client.book.update({
        where: {
          bookID: id,
        },
        data: {
          title,
          description,
          author,
          publicationDate,
          ISBN,
        },
      });
      if (!update) res.status(404).json({ msg: "user not found" });
      res.status(200).json({ msg: "user updated " });
    } catch (error) {
      res.status(500).json({ msg: "Internal error " });
    }
  },
  deleteBook: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await client.book.delete({
        where: {
          bookID: id,
        },
      });
      res.status(200).json({ msg: "book delted" });
    } catch (error) {
      res.status(500).json({ msg: "intrernal error " });
    }
  },
};
export default bookController;
