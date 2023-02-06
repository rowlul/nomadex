import { Component } from '@angular/core';

@Component({
  selector: 'home-header',
  template: `
    <app-header>
      <ng-container left>
        <ul
          class="hidden md:flex menu menu-horizontal menu-compact font-bold px-1">
          <li><a routerLink="/hotels">Hotels</a></li>
          <li><a routerLink="/rooms">Rooms</a></li>
          <li><a routerLink="/offers">Offers</a></li>
          <li><a routerLink="/about">About</a></li>
        </ul>
      </ng-container>
      <ng-container right>
        <ul
          class="hidden md:flex menu menu-horizontal menu-compact font-bold px-1">
          <li>
            <a routerLink="/reservations">
              <div class="hidden lg:inline">
                <ng-icon
                  name="heroClockSolid"
                  class="hidden lg:inline"></ng-icon>
              </div>
              Reservations
            </a>
          </li>
          <li>
            <a routerLink="/contact">
              <div class="hidden lg:inline">
                <ng-icon name="heroPhoneSolid"></ng-icon>
              </div>
              Contact
            </a>
          </li>
        </ul>
        <button class="btn btn-ghost btn-circle" routerLink="/login">
          <ng-icon name="heroUserSolid" size="18"></ng-icon>
        </button>
      </ng-container>
    </app-header>
  `,
})
export class HomeLayoutHeaderComponent {}
