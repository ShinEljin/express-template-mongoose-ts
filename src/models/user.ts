import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
