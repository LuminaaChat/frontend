import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';
import { Roles } from '../../models/roles.enum';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  constructor(readonly router: Router) {}
  roles = Roles;

  name: string = '';
  surname: string = '';
  email: string = '';
  role: Roles = Roles.Client;

  back() {
    this.router.navigateByUrl('mainpage');
  }

  complete() {
    //this.service.createUser(new UserEntity({name: this.name, surname: this.surname, email: this.email, role: this.role}))
  }
}
