import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ListUsersComponent } from '../../users/list-users/list-users.component';
import { CreateUsersComponent } from '../../users/create-users/create-users.component';
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
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
