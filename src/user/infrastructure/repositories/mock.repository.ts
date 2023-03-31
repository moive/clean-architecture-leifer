import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../../domain/user.repository';

const MOCK_USER = {
  name: 'Moises',
  email: 'test@example',
  description: 'The Moises',
  uuid: 'asd0f3s4df4e5f4e'
};

export class MockRepository implements UserRepository {
  async allUser(): Promise<UserEntity[] | null> {
    const user = [MOCK_USER, MOCK_USER, MOCK_USER];
    return user;
  }
  async findUserById(_uuid: string): Promise<UserEntity | null> {
    const user = MOCK_USER;
    return user;
  }
  async registerUser(_user: UserEntity): Promise<UserEntity | null> {
    const newUser = MOCK_USER;
    return newUser;
  }
}
