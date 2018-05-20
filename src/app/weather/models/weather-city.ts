import { IWeatherCity } from '../interfaces';

export class WeatherCity implements IWeatherCity {
  countryCode: string;
  name: string;

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
  }

  formatted(): string {
    return [this.name, this.countryCode].filter(item => item).join(', ');
  }

}
