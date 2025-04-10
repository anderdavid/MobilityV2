import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class Paginator {
  @Output() page = new EventEmitter<number>();
  currentPage: number = 1;
  pagers: number[] = [1, 2];

  setPager = (nextPage: number) => {
    this.page.emit(nextPage);
    this.currentPage = nextPage;
  };
}
