import { Component } from '@angular/core';
import { TableComponent } from '../../main/components/table/table.component';

@Component({
  selector: 'list-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent {}
