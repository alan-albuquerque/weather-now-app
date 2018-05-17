import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { WeatherBoxListComponent } from './components/weather-box-list/weather-box-list.component';
import { LayoutModule } from '../core/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [
    WeatherBoxComponent,
    WeatherBoxListComponent,
  ],
  exports: [
    WeatherBoxComponent,
    WeatherBoxListComponent,
  ],
})
export class WeatherModule {
}
