import {Routes} from '@angular/router';
import {UsersComponent} from "../users/users.component";
import {UserGroupsComponent} from "../user-groups/user-groups.component";
import {AdminComponent} from "./admin.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'groups',
        component: UserGroupsComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'users'
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
      },
    ],
  }
];
