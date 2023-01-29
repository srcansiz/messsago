import { Schema, Types } from 'mongoose';

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    last_token: { type: String, required: true },
});


