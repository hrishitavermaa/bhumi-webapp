import { Router } from "express";
import controller from "../controller/admin";

const router = Router()
router.route("/signup").post(controller.signup)

export default router