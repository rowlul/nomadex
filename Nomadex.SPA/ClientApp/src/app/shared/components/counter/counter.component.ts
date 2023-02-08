import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() value = 0;
  @Input() min = Number.NEGATIVE_INFINITY;
  @Input() max = Number.POSITIVE_INFINITY;

  @Output() valueChange = new EventEmitter<number>();

  ngOnInit() {
    if (this.min != Number.NEGATIVE_INFINITY && this.value < this.min) {
      this.value = this.min;
    }

    console.log(this.value);
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
