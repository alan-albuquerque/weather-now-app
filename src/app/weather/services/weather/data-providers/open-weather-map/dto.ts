import { JsonProperty } from 'json-object-mapper';

/***
 * Models to represent and exposes the principal elements of this JSON:
 {
   'coord': {
     'lon': -0.13,
     'lat': 51.51
   },
   'weather': [{
     'id': 300,
     'main': 'Drizzle',
     'description': 'light intensity drizzle',
     'icon': '09d'
   }],
   'base': 'stations',
   'main': {
     'temp': 280.32,
     'pressure': 1012,
     'humidity': 81,
     'temp_min': 279.15,
     'temp_max': 281.15
   },
   'visibility': 10000,
   'wind': {
     'speed': 4.1,
     'deg': 80
   },
   'clouds': {
     'all': 90
   },
   'dt': 1485789600,
   'sys': {
     'type': 1,
     'id': 5091,
     'message': 0.0103,
     'country': 'GB',
     'sunrise': 1485762037,
     'sunset': 1485794875
   },
   'id': 2643743,
   'name': 'London',
   'cod': 200
 }
 */

export class OpenWeatherMainDTO {
  @JsonProperty()
  temp: Number;
  @JsonProperty()
  pressure: Number;
  @JsonProperty()
  humidity: Number;
  @JsonProperty({name: 'temp_min'})
  tempMin: Number;
  @JsonProperty({name: 'temp_max'})
  tempMax: Number;

  constructor() {
    this.temp = undefined;
    this.pressure = undefined;
    this.humidity = undefined;
    this.tempMin = undefined;
    this.tempMax = undefined;
  }
}

export class OpenWeatherResponseDTO {
  @JsonProperty({type: OpenWeatherMainDTO, name: 'main'})
  data: OpenWeatherMainDTO;

  constructor() {
    this.data = undefined;
  }

}
