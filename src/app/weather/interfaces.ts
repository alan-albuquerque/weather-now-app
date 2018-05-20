export interface IWeatherCity {
  name: string;
  countryCode: string;

  formatted(): string;
}

export interface IWeatherBoxListConfig {
  cities: IWeatherCity[];
}

export interface IWeatherInfo {
  temp: Number;
  pressure: Number;
  humidity: Number;
}
