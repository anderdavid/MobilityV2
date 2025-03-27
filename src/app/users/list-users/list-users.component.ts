import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../main/components/table/table.component';
import { fakeData } from '../../main/components/table/fakeData';
import { ColumnI } from '../../main/components/table/table.interface';

@Component({
  selector: 'list-users',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  mFakeData = fakeData;
  columns: ColumnI[] = [
    { title: 'Nombre', data: 'name' },
    { title: 'Apellido', data: 'lastName' },
    { title: 'Fecha de Nacimiento', data: 'dateOfBirth' },
    { title: 'Edad', data: 'age' },
    { title: 'Genero', data: 'gendre' },
    { title: 'Ciudad', data: 'city' },
    { title: 'Departamento', data: 'department' },
    { title: 'Login', data: 'username' },
    { title: 'Correo', data: 'email' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
