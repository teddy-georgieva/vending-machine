import { Component } from '@angular/core';
import {ProductService} from '../../service/productService';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-products',
  imports: [
    MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatInputModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productsControl = new FormControl<ProductProps | null>(null);
  products: ProductProps[] = [];
  constructor(private productService: ProductService) {
     productService.getProducts().subscribe((product)=>{
       this.products = product;
      console.log(product)
    })
  }
}
