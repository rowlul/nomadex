import { Component } from '@angular/core';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent {
  constructor(public hamburgerService: HamburgerService) {}
}
