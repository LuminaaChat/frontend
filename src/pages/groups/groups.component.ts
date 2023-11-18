import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { GroupTableComponent } from '../../components/group-table/group-table.component';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, GroupTableComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.scss'
})
export class GroupsComponent {
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

  filtergroup()  {
    let groups: GroupEntity[]  = [];
      //TODO: FUNCTION DOESN'T WORK. 
      // NEEDS TO FIND A WAY OF NOT REPEATING TABLES
    this.users.forEach((user) =>{
      let result = groups.find((user1)  => { 
          return user1.id == user.id;
        })
      if(!result)
        groups.push(user.group)
      });

    return groups;
  }

  editUser(userId: string) {
    alert('User Bearbeiten');
  }
}
