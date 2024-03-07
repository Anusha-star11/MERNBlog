import express from 'express'
import { test } from '../controllers/user.controler.js';
import { updateUser,deleteUser } from '../controllers/user.controler.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get("/test", test);
router.put("/update/:userId",verifyToken,updateUser);
router.delete("/delete/:userId",verifyToken,deleteUser);

export default router;