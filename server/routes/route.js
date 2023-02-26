import express from 'express';

import { editUser, addUser, getUsers, getUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser);
router.put('/:id', editUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);

export default router;