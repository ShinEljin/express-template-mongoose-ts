import express from "express";

import {
  postUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
} from "../controllers/User/index";

const router = express.Router();

//router.get(<route>, function from controller)

router.post("/", postUser);
router.get("/:id", getUser);
router.get("/", getAllUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
