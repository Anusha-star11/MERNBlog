import express from 'express'
import { verifyToken } from '../utils/verifyUser.js';
import { createpost, getposts } from '../controllers/post.controller.js';

const router=express.Router();

router.post('/createpost', verifyToken, createpost);
router.get('/getposts', getposts);

export default router;