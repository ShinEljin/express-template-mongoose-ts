import User, { IUser } from "../../models/user";
import { Request, Response } from "express";

export const postUser = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    await User.create({ name });

    res.status(201).json({ message: "New User Posted" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user: IUser | null = await User.findById(id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();

    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const user: IUser | null = await User.findByIdAndUpdate(id, { name });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user: IUser | null = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
