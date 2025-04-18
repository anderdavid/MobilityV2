import {
  Component,
  Input,
  NgModule,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paginator } from './paginator/paginator.component';
import { ColumnI } from './table.interface';
import { fakeDataI } from './fakeData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Table',
  standalone: true,
  imports: [CommonModule, Paginator, FormsModule],
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
  pagers: number[] = [];

  minRow: number = 0;
  maxRow: number = 0;
  rows: number = 0;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.reload();
  }

  reload = () => {
    this.rows = this.items.length;
    const { minRow, maxRow, groups } = this.setMinMaxRow(
      this.rows,
      this.maxRowByPage,
      this.currentPage
    );

    console.log({ minRow, maxRow, groups });
    this.minRow = minRow + 1;
    this.maxRow = maxRow;

    this.viewData = this.items.slice(minRow, maxRow);
    console.log('viewData', this.viewData);
    this.cdr.detectChanges();
  };

  setMinMaxRow = (rows: number, maxRow: number, currentPage: number) => {
    let minRow: number;
    let groups = Math.floor(rows / maxRow);

    if (groups * maxRow < rows) {
      groups += 1;
    }
    this.createPagers(groups);
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

  createPagers = (groups: number) => {
    this.pagers = [];
    for (let i = 1; i <= groups; i++) {
      this.pagers.push(i);
    }

    console.log('pagers', this.pagers);
  };

  handlePagers(page: number) {
    this.currentPage = page;
    console.log(`handlePagers page ${this.currentPage}`);
    this.reload();
  }

  onChangeRow() {
    console.log(`change ${this.maxRowByPage}`);
    this.reload();
  }
}
