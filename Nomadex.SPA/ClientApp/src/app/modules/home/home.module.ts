import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, CounterComponent],
  exports: [HomeComponent, HomeRoutingModule],
})
export class HomeModule {}
