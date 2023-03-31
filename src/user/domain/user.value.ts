import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';

export class UserValue implements UserEntity {
  name: string;
  email: string;
  uuid: string;
  description: string;

  constructor({ name, email, description = 'Default' }: UserEntity) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
