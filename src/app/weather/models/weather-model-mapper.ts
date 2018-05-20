import { OpenWeatherResponseDTO } from '../services/weather/data-providers/open-weather-map/dto';
import { WeatherInfo } from './weather-info';

/**
 * Map Class to convert the Weather services response objects for app level objects
 */
export class WeatherModelMapper {
  map<T>(object: any): T {
    if (object instanceof OpenWeatherResponseDTO) {
      const instance = new WeatherInfo();
      instance.temp = object.data.temp;
      instance.humidity = object.data.humidity;
      instance.pressure = object.data.pressure;
      return <any>instance;
    }
    throw new Error(`Can't map the object ${object}`);
  }
}
