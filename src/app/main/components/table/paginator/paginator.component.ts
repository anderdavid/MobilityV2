import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class Paginator implements OnInit {
  @Output() page = new EventEmitter<number>();
  @Input() pagers: number[] = [];

  currentPage: number = 1;
  window = 0;
  windowLength = 3;
  firstPages: number[] = [];
  lastPage: number = 0;
  backDisable = true;
  nextDisable = false;

  ngOnInit(): void {
    this.firstPages = this.pagers.slice(this.window, this.windowLength);
    this.lastPage = this.pagers[this.pagers.length - 1];
  }

  setPager = (nextPage: number) => {
    this.page.emit(nextPage);
    this.currentPage = nextPage;
  };

  forwardWindow = () => {
    console.log('forwardWindow()');
    if (!this.nextDisable) {
      if (this.currentPage + 1 === this.lastPage) {
        this.nextDisable = true;
      }
      if (this.currentPage > 1) {
        this.backDisable = false;
      }
      if (this.currentPage === 1) {
        this.backDisable = false;
      }
      this.setPager(this.currentPage + 1);
      this.window += 1;
      this.firstPages = this.pagers.slice(
        this.window,
        this.window + this.windowLength
      );
    }
  };
  reverseWindow = () => {
    if (!this.backDisable) {
      if (this.currentPage - 1 === 1) {
        this.backDisable = true;
      }
      if (this.currentPage - 1 < this.lastPage) {
        this.nextDisable = false;
      }
      this.setPager(this.currentPage - 1);
      this.window -= 1;
      this.firstPages = this.pagers.slice(
        this.window,
        this.window + this.windowLength
      );
    }
  };
}
