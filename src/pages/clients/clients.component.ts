import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ClientTableComponent } from '../../components/client-table/client-table.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, ClientTableComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  users: UserEntity[] = [];
  filteredUsers: UserEntity[] = [];

  constructor() {
    this.users = [
      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
      },
      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
      },
      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
      },

      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
      },
      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
      },

      {
        id: 'user123',
        name: 'Alice',
        surname: 'Johnson',
        type: 'Employee',
        group: new GroupEntity({ id: '1', name: 'Baum' }),
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
    alert('User Bearbeiten');
  }
}

