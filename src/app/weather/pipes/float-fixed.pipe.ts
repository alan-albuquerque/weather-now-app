import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../utils';

@Pipe({
  name: 'floatFixed'
})
export class FloatFixed implements PipeTransform {

  transform(value: any, args: number = 0): any {
    if (!Utils.isNullOrUndefined(value)) {
      return Number(value).toFixed(args);
    }
    return value;
  }

}
