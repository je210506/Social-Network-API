import { Router } from 'express';
const router = Router();
import { getSingleUsers, getUsers, createFriend, createUser, deleteFriend} from '../../controller/userController.js';

router.route('/').get(getUsers).post(createUser);

// Route to get a single user by ID
router.route("/:userId").get(getSingleUsers);

//add friend then remove friend
router.route("/:userId/friends/:friendId").post(createFriend).delete(deleteFriend); 





export default router;
