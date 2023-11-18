import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, EmployeeTableComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  users: UserEntity[] = [];
  filteredUsers: UserEntity[] = [];

  constructor(readonly router: Router) {
    this.users = [
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
    ];
    this.filteredUsers = this.users;
  }

  filterList(event: string) {
    console.log(event);
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(event.toLowerCase())
    );
  }

  editUser(userId: string) {
    this.router.navigateByUrl('edit-user?uid=' + userId);
  }

  newEmployee() {
    this.router.navigateByUrl('create-user');
  }
}
