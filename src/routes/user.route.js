import { Router } from "express";
import { deleteUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/verifyUser.js";

const router = Router();

router.get("/");
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
