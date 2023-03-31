import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';
import UserModel from '../model/user.schema';

export class MongoRepository implements UserRepository {
  async allUser(): Promise<UserEntity[] | null> {
    const user = await UserModel.find();
    return user;
  }
  async findUserById(uuid: string): Promise<UserEntity | null> {
    const user = await UserModel.findOne({ uuid });
    return user;
  }
  async registerUser(user: UserEntity): Promise<UserEntity | null> {
    const newUser = await UserModel.create(user);
    return newUser;
  }
}
