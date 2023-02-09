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
import { HotelsComponent } from './pages/hotels/hotels.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { OffersComponent } from './pages/offers/offers.component';
import { AboutComponent } from './pages/about/about.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerComponent,
    HomeComponent,
    HomePageComponent,
    HotelsComponent,
    RoomsComponent,
    OffersComponent,
    AboutComponent,
    ReservationsComponent,
    ContactComponent,
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
