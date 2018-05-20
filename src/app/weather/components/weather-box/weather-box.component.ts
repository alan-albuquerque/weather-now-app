import { Component, Input, OnInit } from '@angular/core';
import { IWeatherCity } from '../../interfaces';
import { WeatherService } from '../../services/weather/weather.service';
import { WeatherInfo } from '../../models/weather-info';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  @Input() refreshInterval = 600000; // 10 min
  @Input() refreshEnabled = true;
  @Input() showMoreInfo = false;

  curInterval;
  weatherInfo: WeatherInfo;
  lastUpdate: Date;
  loading = true;
  error = false;

  get city(): IWeatherCity {
    return this._city;
  }

  @Input()
  set city(value: IWeatherCity) {
    const changed = !this._city || !Object.is(this._city, value);
    this._city = value;
    if (changed) {
      this.load();
    }
  }

  private _city: IWeatherCity;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
  }

  load() {
    this.cancelNextLoad();
    if (!this._city) {
      return;
    }
    if (!this.weatherInfo) {
      // first load, show spinner
      this.loading = true;
    }
    this.weatherService.byCityName(this._city.name, this._city.countryCode)
      .subscribe((data) => {
        console.log(data);
        this.lastUpdate = new Date();
        this.loading = false;
        this.error = false;
        this.weatherInfo = data;
        this.scheduleNextLoad();
      }, (e) => {
        console.error(e);
        this.loading = false;
        this.error = true;
        this.weatherInfo = null;
      });
  }

  tryAgain() {
    this.error = false;
    this.load();
  }

  scheduleNextLoad() {
    this.cancelNextLoad();
    if (!this.refreshEnabled) {
      return;
    }
    this.curInterval = setTimeout(() => {
      this.load();
    }, this.refreshInterval);
  }

  cancelNextLoad() {
    if (this.curInterval) {
      clearTimeout(this.curInterval);
      this.curInterval = null;
    }
  }

  get isDataLoaded() {
    return !this.loading && this.weatherInfo && !this.error;
  }

  toggleShowMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

}
