import { Component } from '@angular/core';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public hamburgerService: HamburgerService) {}
}
