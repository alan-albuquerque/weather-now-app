import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { OpenWeatherMapService } from './open-weather-map.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import * as mock from '../../../../../../mock/data/open-weather-map.json';
import { WeatherInfo } from '../../../../models/weather-info';

describe('OpenWeatherMapService', () => {
  let injector: TestBed;
  let service: OpenWeatherMapService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OpenWeatherMapService]
    });
    injector = getTestBed();
    service = injector.get(OpenWeatherMapService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([OpenWeatherMapService], () => {
    expect(service).toBeTruthy();
  }));

  it('#byCityName should return WeatherInfo', () => {
    service.byCityName('Joinville', 'BR').subscribe((data => {
      expect(data instanceof WeatherInfo).toBeTruthy();
    }));
    const req = httpMock.expectOne(`${service.getWeatherUrl('Joinville', 'BR')}`);
    expect(req.request.method).toBe('GET');
    req.flush((<any>mock).weather);
  });

});
