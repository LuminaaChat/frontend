import { Routes } from '@angular/router';
import { EmployeeComponent } from '../pages/employee/employee.component';
import { ClientsComponent } from '../pages/clients/clients.component';
import { GroupsComponent } from '../pages/groups/groups.component';

export const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: '**',
    component: EmployeeComponent,
  },
];
