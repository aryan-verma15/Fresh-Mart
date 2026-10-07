import { Router } from "express";
import { healthCheck, testError } from "../controllers/health-check.controller.js";

const router = Router()

router.route("/").get(healthCheck)
router.route('/test-error').get(testError);

export default router


