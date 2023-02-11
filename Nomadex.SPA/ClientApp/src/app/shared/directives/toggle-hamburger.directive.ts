import { Directive, HostListener } from '@angular/core';
import { HamburgerService } from '../services/hamburger.service';

@Directive({
  selector: '[appToggleHamburger]',
})
export class ToggleHamburgerDirective {
  constructor(private hamburgerService: HamburgerService) {}

  @HostListener('click') onClick() {
    this.hamburgerService.toggleHamburgerVisibility();
  }
}
