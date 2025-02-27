import User from '../model/user';
import Friend from '../model/friend';
import { Request, Response } from 'express';


// Get all friends
export const getFriends = async (_req: Request, res: Response) => {
  try {
    const friends = await Friend.find();
    res.json(friends);
  } catch (err) {
    res.status(500).json(err);
  }
};


// Get a single friend by ID
export const getSingleFriend = async (req: Request, res: Response) => {
  try {
    const friend = await Friend.findOne({ _id: req.params.friendId });
    if (!friend) {
      res.status(404).json({ message: 'No friend with that ID' });
    } else {
      res.json(friend);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


// Create a new friend
export const createFriend = async (req: Request, res: Response) => {
  try {
    const friend = await Friend.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { friends: friend._id } },
      { new: true }
    );
    if (!user) {
      res
        .status(404)
        .json({ message: 'Friend added, but found no user with that ID' });
    } else {
      res.json('Friend added successfully :tada:');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};


// Delete a friend by ID
export const deleteFriend = async (req: Request, res: Response) => {
  try {
    const friend = await Friend.findOneAndDelete({ _id: req.params.friendId });
    if (!friend) {
      res.status(404).json({ message: 'No friend with that ID' });
    } else {
      res.json({ message: 'Friend deleted successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};