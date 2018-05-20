import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { WeatherBoxListComponent } from './components/weather-box-list/weather-box-list.component';
import { LayoutModule } from '../core/layout/layout.module';
import { WeatherService } from './services/weather/weather.service';
import { OpenWeatherMapService } from './services/weather/data-providers/open-weather-map/open-weather-map.service';
import { TemperatureStyleDirective } from './directives/temperature-style.directive';
import { FloatFixed } from './pipes/float-fixed.pipe';

const ELEMENTS = [
  WeatherBoxComponent,
  WeatherBoxListComponent,
  TemperatureStyleDirective,
  FloatFixed,
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
  ],
  declarations: [
    ...ELEMENTS
  ],
  exports: [
    ...ELEMENTS
  ],
  providers: [
    {provide: WeatherService, useClass: OpenWeatherMapService},
  ]
})
export class WeatherModule {
}
