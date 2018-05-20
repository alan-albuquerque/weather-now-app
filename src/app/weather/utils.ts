export class Utils {
  static temperatureToCssClass(temp: number) {
    if (temp > 26) {
      return 'high-temp';
    }
    if (temp > 6) {
      return 'medium-temp';
    }
    return 'low-temp';
  }

  static isNullOrUndefined(val): boolean {
    return typeof val === 'undefined' || val === null;
  }
}
