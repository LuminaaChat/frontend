import { GroupEntity } from './group.entity';

export class UserEntity {
  id: string;
  name: string;
  surname: string;
  type: string;
  group: GroupEntity;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.type = user.type;
    this.group = user.group;
  }
}
