import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    WeatherModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
