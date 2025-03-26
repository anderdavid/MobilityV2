import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ListUsersComponent } from '../../users/list-users/list-users.component';
import { CreateUsersComponent } from '../../users/create-users/create-users.component';
import { EditUserComponent } from '../../users/edit-user/edit-user.component';
import { DetailUserComponent } from '../../users/detail-user/detail-user.component';
import { ForgotPasswordComponent } from '../../users/forgot-password/forgot-password.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ListUsersComponent,
    CreateUsersComponent,
    ForgotPasswordComponent,
    EditUserComponent,
    DetailUserComponent,
    RouterOutlet,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
