import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroClockSolid,
  heroPhoneSolid,
  heroUserSolid,
} from '@ng-icons/heroicons/solid';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeComponent as HomePageComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerComponent,
    HomeComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule,
    NgIconsModule.withIcons({ heroClockSolid, heroPhoneSolid, heroUserSolid }),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
