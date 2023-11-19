import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { CreateUserComponent } from '../pages/create-user/create-user.component';
import { EditUserComponent } from '../pages/edit-user/edit-user.component';
import { AddUserComponent } from '../pages/add-user/add-user.component';
import { CreateGroupComponent } from '../pages/create-group/create-group.component';

export const routes: Routes = [
  {
    path: 'mainpage',
    component: MainComponent,
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
  {
    path: 'create-group',
    component: CreateGroupComponent,
  },
  {
    path: 'edit-user',
    component: EditUserComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
];
