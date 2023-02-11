import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroBars3Solid,
  heroMinusSolid,
  heroPlusSolid,
} from '@ng-icons/heroicons/solid';
import { CounterComponent } from './components/counter/counter.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo.component';
import { ToggleHamburgerDirective } from './directives/toggle-hamburger.directive';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    HamburgerComponent,
    CounterComponent,
    ToggleHamburgerDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgIconsModule.withIcons({ heroBars3Solid, heroMinusSolid, heroPlusSolid }),
  ],
  exports: [
    LogoComponent,
    HeaderComponent,
    HamburgerComponent,
    CounterComponent,
    ToggleHamburgerDirective,
  ],
})
export class SharedModule {}
