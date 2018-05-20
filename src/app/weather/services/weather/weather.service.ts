/**
 * Base class for the weather service, this class must be injected.
 * Configure with a concrete provider in the configuration of the module.
 */
import { Observable } from 'rxjs';
import { WeatherInfo } from '../../models/weather-info';

export abstract class WeatherService {
  abstract byCityName(city: string, countryCode: string): Observable<WeatherInfo>;
}
