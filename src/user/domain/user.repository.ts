import { UserEntity } from './user.entity';

export interface UserRepository {
  findUserById(uuid: string): Promise<UserEntity | null>;
  registerUser(user: UserEntity): Promise<UserEntity | null>;
  allUser(): Promise<UserEntity[] | null>;
}
