import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ContentComponent } from './main/content/content.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: ContentComponent },
];
