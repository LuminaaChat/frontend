import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Roles } from '../../models/roles.enum';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  user: UserEntity;

  constructor(readonly router: Router) {
    //Service anbinden

    this.user = {
      id: 'user123',
      name: 'Alice',
      surname: 'Johnson',
      type: 'Employee',
      email: 'test@gmail.com',
      groupId: '124256',
    };

    console.log(this.user);
  }

  back() {
    this.router.navigateByUrl('mainpage');
  }

  complete() {
    //this.service.createUser(new UserEntity({name: this.name, surname: this.surname, email: this.email, role: this.role}))
  }
}
