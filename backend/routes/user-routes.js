import express from 'express';
import { getAllUser,getUserById,login,signup } from '../controllers/user-controllers';

const router =express.Router();
router.get("/",getAllUser);

router.post("/signup",signup);
router.post("/login",login);
router.get("/:id",getUserById);
export default router;