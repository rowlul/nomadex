import { formatDate } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentDate = Date.now();
  formattedCurrentDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');
}
