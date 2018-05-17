import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoxListComponent } from './weather-box-list.component';

describe('WeatherBoxListComponent', () => {
  let component: WeatherBoxListComponent;
  let fixture: ComponentFixture<WeatherBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBoxListComponent ]
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
