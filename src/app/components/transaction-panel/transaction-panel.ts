import {Component, inject} from '@angular/core';
import {PriceService} from '../../services/api/price.service';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {combineLatest, map} from 'rxjs'

@Component({
  selector: 'app-transaction-panel',
  imports: [
    AsyncPipe,
    CurrencyPipe,
  ],
  templateUrl: './transaction-panel.html',
  styleUrl: './transaction-panel.css',
})
export class TransactionPanel {
  priceService = inject(PriceService)
  productPrice$ = this.priceService.price$;
  insertedAmount$ = this.priceService.coins$;
  changeAmount$ = combineLatest([
    this.productPrice$,
    this.insertedAmount$
  ]).pipe(
    map(([price, coins]) => coins - price)
  );
}
