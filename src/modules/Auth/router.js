import  express from "express";
import AuthController from "./controller.js";

const router = express.Router();

router.post('/signup', AuthController.signup)
router.post("/login", AuthController.signup)

export default router;