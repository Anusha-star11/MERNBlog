import express from 'express'
import { getUsers, test } from '../controllers/user.controler.js';
import { updateUser,deleteUser,signout } from '../controllers/user.controler.js';
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get("/test", test);
router.put("/update/:userId",verifyToken,updateUser);
router.delete("/delete/:userId",verifyToken,deleteUser);
router.post('/signout',signout);
router.get('/getusers',verifyToken,getUsers)

export default router;