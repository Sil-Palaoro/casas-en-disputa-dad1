import { Router } from "express";
// import app from "..server.js";

import { BotController } from "../controllers/bot.controller.js";

const router = Router();

router.post('/move', BotController.botMove);

router.get('/move', BotController.botPrueba);


export default router;