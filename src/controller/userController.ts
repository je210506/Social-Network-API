import User from '../model/user.js';
import { Request, Response } from 'express';


// Get all users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};


// Get a single friend by ID
export const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      res.status(404).json({ message: 'No friend with that ID' });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//create user
export const createUser= async (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const user = await User.create(req.body);
    
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

//delete user
export const deleteUser = async (req: Request, res: Response) => {
  console.log(req.params)
  try {
    const user = await User.findByIdAndDelete(req.params.userId);

    if (!user) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.json({ message: 'User deleted successfully 🎉' });
  } catch (err) {
    return res.status(500).json(err);
  }
};

//update a thought
export const updateUser = async (req: Request, res:Response) => {
  try {
      const user = await User.findOneAndUpdate(
          {_id: req.params.userId},
          { $set: req.body},
          {new: true, runValidators: true},
      );
      
      if (!user) {
          return res.status(404).json({message: 'Could not update user!'})
      }

      res.json(user);
      return;
  } catch(err) {
      res.status(500).json(err);
      return;
  }
}

// Create a new friend
export const createFriend = async (req: Request, res: Response) => {
  try {
    // const friend = await User.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
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
    const user = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ message: 'No friend with that ID' });
    } else {
      res.json({ message: 'Friend deleted successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};