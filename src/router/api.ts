import { Router } from "express";
import {createDispenserController} from "../controllers/DispenserController";

const router = Router();

// POST /api/dispenser/create
router.post('/dispenser/create', createDispenserController);

export default router;
