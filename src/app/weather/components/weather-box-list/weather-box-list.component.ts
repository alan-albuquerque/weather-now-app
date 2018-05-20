import { Component, Input, OnInit } from '@angular/core';
import { IWeatherBoxListConfig, IWeatherCity } from '../../interfaces';

@Component({
  selector: 'app-weather-box-list',
  templateUrl: './weather-box-list.component.html',
  styleUrls: ['./weather-box-list.component.scss']
})
export class WeatherBoxListComponent implements OnInit {

  @Input() config: IWeatherBoxListConfig;

  constructor() {
  }

  ngOnInit() {
  }

  get cities(): IWeatherCity[] {
    if (this.config && this.config.cities) {
      return this.config.cities;
    }
    return [];
  }

}
