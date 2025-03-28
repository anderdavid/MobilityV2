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
    { title: 'Nombre', data: 'name', width: '160px' },
    { title: 'Apellido', data: 'lastName', width: '160px' },
    { title: 'Fecha de Nacimiento', data: 'dateOfBirth', width: '200px' },
    { title: 'Edad', data: 'age', width: '40px' },
    { title: 'Genero', data: 'gendre', width: '40px' },
    { title: 'Ciudad', data: 'city', width: '80px' },
    { title: 'Departamento', data: 'department', width: '60px' },
    { title: 'Login', data: 'username', width: '160px' },
    { title: 'Correo', data: 'email', width: '160px' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
