import { Router } from "express";
import userController from "../controllers/users.controller.js";
import middleware from "../middleware/index.js";

export const {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
} = userController;

const { verifyToken, checkDuplicateEmail } = middleware;

const router = Router();

router.get("/users", [verifyToken], findAll);
router.post("/users", [verifyToken, checkDuplicateEmail], createUser);
router.get("/users/:id", [verifyToken], findUserById);
router.put("/users/:id", [verifyToken], updateUserById);
router.delete("/users/:id", [verifyToken], deleteUserById);

export default router;
