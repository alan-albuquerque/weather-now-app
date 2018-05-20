import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Utils } from '../utils';

@Directive({
  selector: '[appTemperatureStyle]'
})
export class TemperatureStyleDirective {
  lastCls: string;

  @Input()
  set appTemperatureStyle(value: number) {
    const changed = value !== this._appTemperatureStyle;
    this._appTemperatureStyle = value;
    if (changed) {
      this.changed();
    }
  }

  private _appTemperatureStyle: number;

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  changed() {
    if (!this.el || Utils.isNullOrUndefined(this._appTemperatureStyle)) {
      return;
    }
    if (this.lastCls) {
      this.render.removeClass(this.el.nativeElement, this.lastCls);
    }
    this.lastCls = Utils.temperatureToCssClass(this._appTemperatureStyle);
    this.render.addClass(this.el.nativeElement, this.lastCls);
  }
}
