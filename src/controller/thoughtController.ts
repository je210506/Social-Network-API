import Thought from '../model/thought';
import User from '../model/user';
import { Request, Response } from 'express';


export const getThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
}

//create a thought
export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            {_id: req.body.userId},
            { $addToSet: {thoughts: thought._id} },
            {new: true}
        );
        if (!user) {
            return res.status(404).json({
                message: 'Thought created, but no user with that ID'
            });
        }

        res.json('Thought created successfully!');
        return;
    } catch (err) {
        console.error;
        res.status(500).json(err);
    }

    return;
}

//update a thought
export const updateThought = async (req: Request, res:Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $set: {videos: req.params.thoughtId} },
            {new: true, runValidators: true},
        );
        
        if (!thought) {
            return res.status(404).json({message: 'Could not update thought'})
        }

        res.json(thought);
        return;
    } catch(err) {
        res.status(500).json(err);
        return;
    }
}