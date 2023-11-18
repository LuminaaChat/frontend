export class GroupEntity {
  id: string;
  name: string;

  constructor(group: GroupEntity) {
    this.id = group.id;
    this.name = group.name;
  }
}
