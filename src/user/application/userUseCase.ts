import { UserEntity } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  registerUser = async (user: UserEntity) => {
    const userValue = new UserValue(user);
    const userCreated = await this.userRepository.registerUser(userValue);

    return userCreated;
  };

  getDetailUser = async (uuid: any) => {
    const user = await this.userRepository.findUserById(uuid);
    return user;
  };

  getAllUser = async () => {
    const users = await this.userRepository.allUser();
    return users;
  };
}
