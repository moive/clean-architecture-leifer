import { Schema, model } from 'mongoose';
import { UserEntity } from '../../domain/user.entity';

const UserSchema = new Schema<UserEntity>(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true
    },
    uuid: {
      type: String,
      unique: true
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

const UserModel = model<UserEntity>('users', UserSchema);

export default UserModel;
