import { Component } from '@angular/core';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
})
export class HamburgerComponent {
  isHamburgerVisible = false;

  constructor(private hamburgerService: HamburgerService) {
    this.hamburgerService.hamburgerVisibilityChange.subscribe(value => {
      this.isHamburgerVisible = value;
    });
  }

  toggleMenu() {
    this.hamburgerService.toggleHamburgerVisibility();
  }
}
