import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product: Product;
  productForm: FormGroup;

  constructor(
    private readonly productServie: ProductService,
    private route: Router
  ) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(),
      img: new FormControl(''),
    });
  }

  onSubmit(data) {
    this.product = data;
    console.log(this.product);
    this.productServie.createProduct(this.product).subscribe(response => {
      this.route.navigate(['/products']);
    });
  }
}
