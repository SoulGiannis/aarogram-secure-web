import express from 'express';
import UserController from '../controllers/usercontrollers.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', UserController.userRegistration);
router.post('/login', UserController.userLogin);
// router.post('/logout', authMiddleware, UserController.userLogout);

export default router;
