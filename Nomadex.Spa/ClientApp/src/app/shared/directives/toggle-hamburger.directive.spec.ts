import { HamburgerService } from '../services/hamburger.service';
import { ToggleHamburgerDirective } from './toggle-hamburger.directive';

describe('CloseHamburgerDirective', () => {
  it('should create an instance', () => {
    const directive = new ToggleHamburgerDirective(new HamburgerService());
    expect(directive).toBeTruthy();
  });
});
