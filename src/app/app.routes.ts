import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { ContentComponent } from './main/content/content.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'users/view', component: ListUsersComponent },
      { path: 'users/create', component: CreateUsersComponent },
      { path: 'users/edit/:id', component: EditUserComponent },
      { path: 'users/detail/:id', component: DetailUserComponent },
      { path: '', redirectTo: 'users/view', pathMatch: 'full' },
    ],
  },
];
