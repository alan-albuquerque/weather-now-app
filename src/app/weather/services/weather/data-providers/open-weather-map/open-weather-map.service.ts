import { Injectable } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { environment } from '@env';

import { map } from 'rxjs/operators';
import { ObjectMapper } from 'json-object-mapper';
import { OpenWeatherResponseDTO } from './dto';
import { WeatherModelMapper } from '../../../../models/weather-model-mapper';
import { WeatherInfo } from '../../../../models/weather-info';
import { Observable } from 'rxjs';
import { CachedHttpClient } from '../../../../../shared/cache/cached-http-client';
import deserialize = ObjectMapper.deserialize;

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService implements WeatherService {
  baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(public cachedHttp: CachedHttpClient) {
  }

  byCityName(city: string, countryCode: string): Observable<WeatherInfo> {
    const url = this.getWeatherUrl(city, countryCode);
    return this.cachedHttp.get<OpenWeatherResponseDTO>(url, 60 * 10)
      .pipe(map((response) => {
        const responseDTO = deserialize(OpenWeatherResponseDTO, response);
        const mapper = new WeatherModelMapper();
        return mapper.map<WeatherInfo>(responseDTO);
      }));
  }

  getUrl(path: string) {
    return `${this.baseUrl}${path}&appid=${environment.openWeatherMapKey}&units=metric`;
  }

  getWeatherUrl(city: string, countryCode: string) {
    return this.getUrl(`weather?q=${city},${countryCode}`);
  }
}

