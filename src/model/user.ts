// Import schema and model from mongoose
import { Schema, model, Document, Types} from 'mongoose';

// Define an interface for the Book document
interface IUser extends Document {
    username: string;
    email: string;
    thoughts: Types.ObjectId[];
    friends: Types.ObjectId[];
  }


// Construct a new instance of the schema class
const userSchema = new Schema<IUser>({
  // Configure individual properties using Schema Types
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  thoughts: [
    {
      type: Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);


// Using model() to compile a model based on the schema 'userSchema'
const User = model<IUser>("User", userSchema);




  export default User;