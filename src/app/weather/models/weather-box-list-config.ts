import { IWeatherBoxListConfig, IWeatherCity } from '../interfaces';

export class WeatherBoxListConfig implements IWeatherBoxListConfig {
  cities: IWeatherCity[];

  constructor(cities: IWeatherCity[]) {
    this.cities = cities;
  }
}
