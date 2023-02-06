import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  /* eslint-disable @angular-eslint/no-input-rename */
  @Input('value') _value!: string;
  value!: number;
  @Input('min') _min!: string;
  min!: number;
  @Input('max') _max!: string;
  max!: number;

  @Output() valueChange = new EventEmitter<number>();

  ngOnInit() {
    this.value = parseInt(this._value);
    if (isNaN(this.value)) {
      this.value = 0;
    }

    this.min = parseInt(this._min);
    if (isNaN(this.min)) {
      this.min = Number.NEGATIVE_INFINITY;
    }

    this.max = parseInt(this._max);
    if (isNaN(this.max)) {
      this.max = Number.POSITIVE_INFINITY;
    }

    // ensure default value is not less than minimal value
    if (this.min != Number.NEGATIVE_INFINITY && this.value < this.min) {
      this.value = this.min;
    }
  }

  add() {
    if (this.value + 1 > this.max) {
      return;
    }
    this.value += 1;
    this.valueChange.emit(this.value);
  }

  remove() {
    if (this.value - 1 < this.min) {
      return;
    }
    this.value -= 1;
    this.valueChange.emit(this.value);
  }
}
