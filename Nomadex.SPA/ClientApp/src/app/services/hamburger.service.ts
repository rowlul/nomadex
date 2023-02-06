import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HamburgerService {
  isHamburgerVisible = false;
  hamburgerVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.hamburgerVisibilityChange.subscribe(value => {
      this.isHamburgerVisible = value;
    });
  }

  toggleHamburgerVisibility() {
    this.hamburgerVisibilityChange.next(!this.isHamburgerVisible);
  }
}
