import { GroupEntity } from './group.entity';

export class UserEntity {
  id: string;
  name: string;
  surname: string;
  type: string;
  email: string;
  groupId: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.type = user.type;
    this.email = user.email;
    this.groupId = user.groupId;
  }
}
