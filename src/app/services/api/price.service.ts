import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PriceService {
  private priceSubject= new BehaviorSubject<number>(0);
  private coinsSubject= new BehaviorSubject<number>(0);

  price$ = this.priceSubject.asObservable();
  coins$ = this.coinsSubject.asObservable();

  setPrice(price: number): void {
    this.priceSubject.next(price);
  }

  setCoins(price: number): void {
    this.coinsSubject.next(price);
  }
}
