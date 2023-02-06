import { Component } from '@angular/core';

@Component({
  selector: 'home-hamburger',
  template: `
    <app-hamburger>
      <ng-container content>
        <ng-content select="[content]"></ng-content>
      </ng-container>
      <ng-container side>
        <ul class="menu p-4 w-80 bg-base-100 text-base-content">
          <li></li>
          <li><a routerLink="/hotels">Hotels</a></li>
          <li><a routerLink="/rooms">Rooms</a></li>
          <li><a routerLink="/offers">Offers</a></li>
          <li><a routerLink="/about">About</a></li>
          <li></li>
          <li><a routerLink="/reservations">Reservations</a></li>
          <li><a routerLink="/contact">Contact</a></li>
        </ul>
      </ng-container>
    </app-hamburger>
  `,
})
export class HomeLayoutHamburgerComponent {}