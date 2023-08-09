import { Router } from "express";
import bootcampController from "../controllers/bootcamps.controller.js";
import middleware from "../middleware/index.js";

export const {
  getBootcamps,
  createBootcamp,
  deleteBootcampById,
  findById,
  addUser,
} = bootcampController;

const { verifyToken } = middleware;

const router = Router();

router.get("/bootcamps", getBootcamps);
router.post("/bootcamps", [verifyToken], createBootcamp);
router.post("/bootcamps/:id/users", [verifyToken], addUser);
router.delete("/bootcamps/:id", [verifyToken], deleteBootcampById);
router.get("/bootcamps/:id", findById);

export default router;
