import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';

import { WeatherBoxComponent } from './weather-box.component';
import { LayoutModule } from '../../../core/layout/layout.module';
import { TemperatureStyleDirective } from '../../directives/temperature-style.directive';
import { WeatherService } from '../../services/weather/weather.service';
import { OpenWeatherMapService } from '../../services/weather/data-providers/open-weather-map/open-weather-map.service';
import { FloatFixed } from '../../pipes/float-fixed.pipe';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CacheModule } from 'ionic-cache';

describe('WeatherBoxComponent', () => {
  let component: WeatherBoxComponent;
  let injector: TestBed;
  let fixture: ComponentFixture<WeatherBoxComponent>;
  let service: WeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule, HttpClientTestingModule, CacheModule.forRoot()],
      declarations: [WeatherBoxComponent, TemperatureStyleDirective, FloatFixed],
      providers: [{provide: WeatherService}]
    })
      .compileComponents();
    injector = getTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoxComponent);
    component = fixture.componentInstance;
    service = injector.get(OpenWeatherMapService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
