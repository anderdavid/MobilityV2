import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginator } from './paginator/paginator.component';
import { ColumnI } from './table.interface';
import { fakeDataI } from './fakeData';

@Component({
  selector: 'Table',
  standalone: true,
  imports: [CommonModule, Paginator],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input() columns!: ColumnI[];
  @Input() items!: fakeDataI[];

  currentPage: number = 1;
  groups: number = 0;
  maxRowByPage: number = 10;
  viewData: fakeDataI[] = [];

  constructor() {}
  ngOnInit(): void {
    this.reload();
  }

  reload = () => {
    const rows = this.items.length;
    const { minRow, maxRow, groups } = this.setMinMaxRow(
      rows,
      this.maxRowByPage,
      this.currentPage
    );

    console.log({ minRow, maxRow, groups });

    this.viewData = this.items.slice(minRow, maxRow);
  };

  setMinMaxRow = (rows: number, maxRow: number, currentPage: number) => {
    let minRow: number;
    let groups = Math.floor(rows / maxRow);

    if (groups * maxRow < rows) {
      groups += 1;
    }
    const group: number = currentPage - 1;

    if (group < groups) {
      minRow = group * maxRow;
      maxRow = (group + 1) * maxRow;
    } else {
      minRow = group * maxRow;
      maxRow = rows;
    }

    return { minRow, maxRow, groups };
  };

  handlePagers(page: number) {
    this.currentPage = page;
    this.reload();
  }
}
