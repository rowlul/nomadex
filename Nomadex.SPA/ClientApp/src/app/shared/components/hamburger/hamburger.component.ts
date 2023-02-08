import { Component } from '@angular/core';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent {
  constructor(public hamburgerService: HamburgerService) {}
}
