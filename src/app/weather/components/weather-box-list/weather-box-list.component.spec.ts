import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoxListComponent } from './weather-box-list.component';
import { LayoutModule } from '../../../core/layout/layout.module';
import { WeatherBoxComponent } from '../weather-box/weather-box.component';
import { TemperatureStyleDirective } from '../../directives/temperature-style.directive';
import { FloatFixed } from '../../pipes/float-fixed.pipe';

describe('WeatherBoxListComponent', () => {
  let component: WeatherBoxListComponent;
  let fixture: ComponentFixture<WeatherBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LayoutModule],
      declarations: [WeatherBoxListComponent, WeatherBoxComponent, TemperatureStyleDirective, FloatFixed]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
