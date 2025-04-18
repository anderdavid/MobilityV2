import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class Paginator implements OnInit, OnChanges {
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
    this.load();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges()');
    console.log('changes', changes);
    if (
      changes['pagers'].previousValue.length !=
      changes['pagers'].currentValue.length
    ) {
      this.load();
    }
  }

  load = () => {
    this.currentPage = 1;
    this.window = 0;

    console.log('paginator pagers', this.pagers);
    this.firstPages = this.pagers.slice(this.window, this.windowLength);
    console.log('firstPages', this.firstPages);
    this.lastPage = this.pagers[this.pagers.length - 1];
    console.log('lastPage', this.lastPage);
    this.setPager(this.currentPage);
  };

  setPager = (nextPage: number) => {
    this.page.emit(nextPage);
    this.currentPage = nextPage;
  };

  validateDisable = () => {
    if (this.currentPage > 1) {
      this.backDisable = false;
    } else {
      this.backDisable = true;
    }
    if (this.currentPage < this.lastPage) {
      this.nextDisable = false;
    } else {
      this.nextDisable = true;
    }
  };
  setFirstPagers = () => {
    console.log('setFirstPagers() window', this.window);
    this.firstPages = this.pagers.slice(
      this.window,
      this.window + this.windowLength
    );
  };

  handlePager = (page: number) => {
    this.setPager(page);
    this.validateDisable();
    this.window = page - 1;
    if (this.lastPage === page) {
      this.setFirstPagers();
    }
  };

  forwardWindow = () => {
    console.log('forwardWindow()');
    if (!this.nextDisable) {
      this.setPager(this.currentPage + 1);
      this.window += 1;
      this.validateDisable();
      this.setFirstPagers();
    }
  };
  reverseWindow = () => {
    if (!this.backDisable) {
      this.setPager(this.currentPage - 1);
      this.window -= 1;
      this.validateDisable();
      this.setFirstPagers();
    }
  };

  handleGoFirstPage = () => {
    this.window = 0;
    this.setPager(1);
    this.validateDisable();
    this.setFirstPagers();
  };

  handleGoLastPage = () => {
    if (this.nextDisable) {
      return;
    }
    if (this.lastPage === 0) {
      return;
    }

    this.window =
      this.lastPage - this.windowLength > 0
        ? this.lastPage - this.windowLength
        : 0;
    this.setPager(this.lastPage);
    this.validateDisable();
    this.setFirstPagers();
  };
}
