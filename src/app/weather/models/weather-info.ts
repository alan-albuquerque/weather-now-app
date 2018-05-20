import { IWeatherInfo } from '../interfaces';

export class WeatherInfo implements IWeatherInfo {
  humidity: Number;
  pressure: Number;
  temp: Number;
}
