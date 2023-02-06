import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HamburgerService } from '../../services/hamburger.service';

@Component({
  standalone: true,
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css'],
  imports: [FormsModule],
})
export class HamburgerComponent {
  constructor(public hamburgerService: HamburgerService) {}
}
