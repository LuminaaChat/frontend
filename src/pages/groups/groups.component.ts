import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { GroupTableComponent } from '../../components/group-table/group-table.component';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, GroupTableComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss',
})
export class GroupsComponent {
  private readonly router = inject(Router);
  users: UserEntity[] = [];
  groups: GroupEntity[] = [];

  constructor() {
    this.groups = [
      {
        id: '43543543',
        name: 'Gruppe1',
        users: [
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
        ],
      },
      {
        id: '43543543',
        name: 'Gruppe2',
        users: [
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
          {
            id: 'user123',
            name: 'Alice',
            surname: 'Johnson',
            type: 'Employee',
            email: 'test@gmail.com',
            groupId: '43543543',
          },
        ],
      },
    ];
  }

  addUser(groupId: string) {}

  createNewGroup() {
    this.router.navigateByUrl('create-group')
  }
}
