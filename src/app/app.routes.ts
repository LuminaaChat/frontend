import { Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { CreateUserComponent } from '../pages/create-user/create-user.component';
import { EditUserComponent } from '../pages/edit-user/edit-user.component';

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
    path: 'edit-user',
    component: EditUserComponent,
  },
  {
    path: '**',
    component: MainComponent,
  },
];
