import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurrencyBGNService {

  format(value: number): string {
    return value.toLocaleString('bg-BG', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + ' BGN';
  }

  parse(value: string): number | null {
    const parsed = Number(value.replace(/[^\d.]/g, ''));
    return isNaN(parsed) ? null : parsed;
  }
}
