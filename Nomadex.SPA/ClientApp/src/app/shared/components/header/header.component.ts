import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private hamburgerService: HamburgerService
  ) {}

  routeToRoot() {
    this.router.navigateByUrl('');

    if (this.hamburgerService.isHamburgerVisible) {
      this.hamburgerService.toggleHamburgerVisibility();
    }
  }

  toggleMenu() {
    this.hamburgerService.toggleHamburgerVisibility();
  }
}
