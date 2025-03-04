import { Router } from 'express';
const router = Router();
import { getSingleUsers, updateUser, getUsers, createFriend, createUser, deleteUser, deleteFriend} from '../../controller/userController.js';

//create user
router.route('/').get(getUsers).post(createUser);


// Route to get a single user by ID
router.route("/:userId").get(getSingleUsers).put(updateUser).delete(deleteUser);

//add friend then remove friend
router.route("/:userId/friends/:friendId").post(createFriend).delete(deleteFriend); 





export default router;
