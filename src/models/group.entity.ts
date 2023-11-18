import { UserEntity } from './user.entity';

export class GroupEntity {
  id: string;
  name: string;
  users: UserEntity[];

  constructor(group: GroupEntity) {
    this.id = group.id;
    this.name = group.name;
    this.users = group.users;
  }
}
