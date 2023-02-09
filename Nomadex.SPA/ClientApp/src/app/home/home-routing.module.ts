import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent as HomePageComponent } from './pages/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { OffersComponent } from './pages/offers/offers.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'hotels',
        component: HotelsComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'reservations',
        component: ReservationsComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
