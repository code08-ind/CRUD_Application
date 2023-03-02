import express from 'express';

// Functions are imported from controllers which are used for handling requests
import { editUser, addUser, getUsers, getUser, deleteUser } from '../controller/user-controller.js';

// Router is imported from express
const router = express.Router();

// Routes are created with different facility such as get, post, put and delete requests
router.post('/add', addUser);
router.put('/:id', editUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

export default router;
