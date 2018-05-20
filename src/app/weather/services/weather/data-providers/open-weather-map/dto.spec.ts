import { OpenWeatherMainDTO, OpenWeatherResponseDTO } from './dto';

import * as mock from '../../../../../../mock/data/open-weather-map.json';
import { ObjectMapper } from 'json-object-mapper';
import deserialize = ObjectMapper.deserialize;

describe('OpenWeatherMapModels', () => {
  const data: any = mock;
  it('test json deserialize of OpenWeatherResponseDTO', () => {
    const model = deserialize(OpenWeatherResponseDTO, data.weather);
    expect(model instanceof OpenWeatherResponseDTO).toBeTruthy();
    expect(model.data).toBeDefined();
    expect(model.data instanceof OpenWeatherMainDTO).toBeTruthy();
  });

  it('test json deserialize of OpenWeatherMainDTO', () => {
    const model = deserialize(OpenWeatherMainDTO, data.weather.main);
    expect(model instanceof OpenWeatherMainDTO).toBeTruthy();
    expect(model.temp).toBeDefined();
    expect(model.pressure).toBeDefined();
    expect(model.humidity).toBeDefined();
    expect(model.tempMin).toBeDefined();
    expect(model.tempMax).toBeDefined();
  });

});
