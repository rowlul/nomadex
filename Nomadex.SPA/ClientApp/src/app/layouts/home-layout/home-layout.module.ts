import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeModule } from 'src/app/modules/home/home.module';

import { NgIconsModule } from '@ng-icons/core';
import {
  heroClockSolid,
  heroPhoneSolid,
  heroUserSolid,
} from '@ng-icons/heroicons/solid';
import { HeaderComponentModule } from 'src/app/components/header/header-component.module';
import { HamburgerComponent } from '../../components/hamburger/hamburger.component';
import { HomeLayoutHamburgerComponent } from './home-layout-hamburger.component';
import { HomeLayoutHeaderComponent } from './home-layout-header.component';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeLayoutHeaderComponent,
    HomeLayoutHamburgerComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    HamburgerComponent,
    HeaderComponentModule,
    NgIconsModule.withIcons({ heroClockSolid, heroPhoneSolid, heroUserSolid }),
  ],
  exports: [HomeLayoutComponent],
})
export class HomeLayoutModule {}
