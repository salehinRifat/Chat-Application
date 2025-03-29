import express from 'express';
import { getMessages, getUserSidebar, sendMessage } from '../controllers/message.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.get("/users",protectRoute, getUserSidebar);
router.get("/:id", protectRoute,getMessages);

router.post("/send/:id", protectRoute, sendMessage);


export default router;