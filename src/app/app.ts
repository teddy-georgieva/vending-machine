import { Component, signal } from '@angular/core';
import {Products} from './components/products/products';
import {TransactionPanel} from './components/transaction-panel/transaction-panel';

@Component({
  selector: 'app-root',
  imports: [ Products, TransactionPanel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
