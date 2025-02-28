import { Router } from 'express';
const router = Router();
import { getSingleUsers, getUsers, createFriend, createUser, deleteFriend} from '../../controller/userController';

router.route('/').get(getUsers).post(createFriend);

// Route to get a single user by ID
router.route("/:userId").get(getSingleUsers);

//add friend then remove friend
router.route("/:userId/friends/:friendId").post(createUser).delete(deleteFriend); 





export default router;
