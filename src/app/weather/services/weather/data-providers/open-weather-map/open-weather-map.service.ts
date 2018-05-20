import { Injectable } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

import { map } from 'rxjs/operators';
import { ObjectMapper } from 'json-object-mapper';
import { OpenWeatherResponseDTO } from './dto';
import { WeatherModelMapper } from '../../../../models/weather-model-mapper';
import { WeatherInfo } from '../../../../models/weather-info';
import { Observable } from 'rxjs';
import { CachedServiceBase } from '../../../../../shared/services/cached-service-base';
import { CacheService } from 'ionic-cache';
import deserialize = ObjectMapper.deserialize;

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService extends CachedServiceBase implements WeatherService {
  baseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(public http: HttpClient, cache: CacheService) {
    super('OpenWeatherMapService', cache);
  }

  byCityName(city: string, countryCode: string): Observable<WeatherInfo> {
    const url = this.getWeatherUrl(city, countryCode);
    const request = this.http.get<OpenWeatherResponseDTO>(url)
      .pipe(map((response) => {
        const responseDTO = deserialize(OpenWeatherResponseDTO, response);
        const mapper = new WeatherModelMapper();
        return mapper.map<WeatherInfo>(responseDTO);
      }));
    return this.cacheResponse(url, request, 600);
  }

  getUrl(path: string) {
    return `${this.baseUrl}${path}&appid=${environment.openWeatherMapKey}&units=metric`;
  }

  getWeatherUrl(city: string, countryCode: string) {
    return this.getUrl(`weather?q=${city},${countryCode}`);
  }
}

