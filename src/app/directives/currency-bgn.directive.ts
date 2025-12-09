import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {CurrencyBGNService} from '../services/helpers/currency-bgn.service';

@Directive({
  selector: '[currencyBGN]',
  standalone: true
})
export class CurrencyBGNDirective {

  constructor(
    private el: ElementRef<HTMLInputElement>,
    private control: NgControl,
    private currencyService: CurrencyBGNService
  ) {}

  @HostListener('focus')
  onFocus() {
    const value = this.control.value;
    if (value !== null && value !== undefined) {
      this.el.nativeElement.value = value.toString();
    }
  }

  @HostListener('blur')
  onBlur() {
    const raw = this.el.nativeElement.value;
    const parsed = this.currencyService.parse(raw);

    if (parsed !== null) {
      this.control.control?.setValue(parsed);
      this.el.nativeElement.value =
        this.currencyService.format(parsed);
    }
  }
}
