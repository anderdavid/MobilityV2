import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnI } from './table.interface';
import { fakeDataI } from './fakeData';

@Component({
  selector: 'Table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() columns!: ColumnI[];
  @Input() items!: fakeDataI[];
  constructor() {}
  ngOnInit(): void {
    //console.log('data', this.columns);
  }
}
