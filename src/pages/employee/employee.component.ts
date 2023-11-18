import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { UserEntity } from '../../models/user.entity';
import { GroupEntity } from '../../models/group.entity';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, EmployeeTableComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  users: UserEntity[] = [];

  ngOnInit(): void {
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
  }
}
