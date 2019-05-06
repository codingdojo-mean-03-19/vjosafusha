import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: string;

  @Input()
  product: Product;

  constructor(
    private readonly productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));
    this.getProduct(this.id);
  }

  getProduct(id: string) {
    console.log(id);
    this.productService.getProductByID(id).subscribe((response: Product) => {
      this.product = response;
      this.productForm = new FormGroup({
        _id: new FormControl(this.product._id),
        title: new FormControl(this.product.title),
        price: new FormControl(this.product.price),
        img: new FormControl(this.product.img),
      });
    });
  }

  onSubmit(data) {
    console.log(data);
    this.product = data;
    console.log(this.product);
    this.productService.editProduct(this.product).subscribe(response => {
      this.product = response;
      this.router.navigate(['/products']);
    });
  }
}
