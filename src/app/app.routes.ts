import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {TermsComponent} from "./pages/terms/terms.component";
import {DataPrivacyComponent} from "./pages/data-privacy/data-privacy.component";
import {ImpressComponent} from "./pages/impress/impress.component";
import {PinComponent} from "./pages/pin/pin.component";

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pin',
    component: PinComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: DataPrivacyComponent
  },
  {
    path: 'impress',
    component: ImpressComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin'
  },
];
