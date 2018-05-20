import { Component } from '@angular/core';
import { IWeatherBoxListConfig, IWeatherCity } from '../weather/interfaces';
import { WeatherBoxListConfig } from '../weather/models/weather-box-list-config';
import { WeatherCity } from '../weather/models/weather-city';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  weatherListConfig: IWeatherBoxListConfig;

  constructor() {
    const citiesList: IWeatherCity[] = [];
    citiesList.push(new WeatherCity('Nuuk', 'GL'));
    citiesList.push(new WeatherCity('Urubici', 'BR'));
    citiesList.push(new WeatherCity('Nairobi', 'KE'));
    this.weatherListConfig = new WeatherBoxListConfig(citiesList);
  }

}
