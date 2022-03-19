import express from 'express';
import { getApplications, addApplication, getApplicationById, editApplication, deleteApplication } from '../controller/application_controller.js';

const router = express.Router();

router.get('/', getApplications);
router.post('/add', addApplication);
router.get('/:id', getApplicationById);
router.put('/:id', editApplication);
router.delete('/:id', deleteApplication);

export default router;