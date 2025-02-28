import { Router } from 'express';
const router = Router();
import { getThoughts, createThought, updateThought } from '../../controller/thoughtController';

// Route to get all thoughts and create a new thought
router.route('/').get(getThoughts).post(createThought);

// Route to update a thought by its ID
router.route('/:thoughtId').put(updateThought);

export default router;
