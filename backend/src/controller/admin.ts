import { Admin } from "@prisma/client";
import { Request, Response } from "express";
import { db } from "../config/db";

const controller = {
  signup: async (req: Request, res: Response) => {
    const payload: Admin = req.body;

    const response = await db.admin.create({ data: payload });
    return res.status(200).json({ success: true, message: response });
  },
};

export default controller;
