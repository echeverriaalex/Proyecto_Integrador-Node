import express from "express";
const router = express.Router();
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/usersController.js";

router.get('/', getUsers)
router.post('/', createUser)
router.put('/:email', updateUser)
router.delete('/:email', deleteUser)
router.get('/:email', getUser)

export default router;