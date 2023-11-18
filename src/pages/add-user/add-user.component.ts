import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent implements OnInit {
  users: UserEntity[] = [];
  selectedUser!: UserEntity;

  ngOnInit(): void {
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
  }
  addUser() {
    alert(this.selectedUser + 'hinzugefügt');
  }
}
