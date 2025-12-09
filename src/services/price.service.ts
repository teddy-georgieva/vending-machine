import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PriceService {
  private priceSubject= new BehaviorSubject<number>(0);
  private coinSubject= new BehaviorSubject<number>(0);

  price$ = this.priceSubject.asObservable();
  coin$ = this.coinSubject.asObservable();

  addPrice(price: number): void {
    this.priceSubject.next(price);
  }

  addCoin(price: number): void {
    this.coinSubject.next(price);
  }
}
