import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';
import { Roles } from '../../models/roles.enum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  name: string = '';
  surname: string = '';
  email: string = '';
  role: Roles = Roles.Client;

  complete() {
    //this.service.createUser(new UserEntity({name: this.name, surname: this.surname, email: this.email, role: this.role}))
  }
}
