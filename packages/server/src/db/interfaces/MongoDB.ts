import { Schema, Types } from 'mongoose';

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    last_token: { type: String, required: true },

    email: { type: String, required: true },
    // And `Schema.Types.ObjectId` in the schema definition.
    organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});


