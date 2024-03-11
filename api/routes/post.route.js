import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { createpost } from '../controllers/post.controller.js';

const router=express.Router();

router.post('/createpost', verifyToken, createpost);

export default router;