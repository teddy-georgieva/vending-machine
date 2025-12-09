import {Component, inject} from '@angular/core';
import {ProductService} from '../../services/api/product.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {PriceService} from '../../services/api/price.service';
import {MatButton} from '@angular/material/button';
import {ConfirmationDialog} from '../confirmation-dialog/confirmation-dialog';
import {MatDialog} from '@angular/material/dialog';
import {CurrencyBGNDirective} from '../../directives/currency-bgn.directive';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  imports: [
    MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule, AsyncPipe, FormsModule, MatButton, CurrencyBGNDirective
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
  productForm: FormGroup;
  productService = inject(ProductService)
  products: Observable<Product[]> = this.productService.getProducts();

  constructor(private priceService: PriceService,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private snackBar: MatSnackBar
  ) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      coins: [
        '',
        [
          Validators.required,
          Validators.min(0.01)
        ]
      ]
    });

    this.productForm.get('coins')!.valueChanges.subscribe(value => {
      if (typeof value === 'number') {
        this.priceService.setCoins(value);
      }
    });
  }

  setPrice(event: MatSelectChange) {
    this.priceService.setPrice(event.value.price);
  }

  cancelOrder() {
    const confirmDialog = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Cancel your order',
        message: 'Are you sure you want to cancel your order?'
      }
    });
    confirmDialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.resetForm();
      }
    });
  }

  confirmOrder() {
    if (this.productForm.invalid) return;

    const { product, coins } = this.productForm.getRawValue();
    const changeAmount = coins - product.price;

    const dialog = this.dialog.open(ConfirmationDialog, {
      data: {
        title: 'Confirm order',
        message: `You will purchase ${product.name}. Your change is ${changeAmount} BGN.`
      }
    });

    dialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.snackBar.open(
          `✅ You bought ${product.name}`,
          'OK',
          {
            duration: 3000,
            verticalPosition: 'bottom'
          }
        );
        this.resetForm();
      }
    });
  }

  resetForm() {
    this.priceService.setPrice(0);
    this.priceService.setCoins(0);

    this.productForm.reset({
      product: '',
      coins: ''
    });

    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.setErrors(null);
      control?.markAsPristine();
      control?.markAsUntouched();
    });
  }

}

