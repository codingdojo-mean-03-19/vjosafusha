import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // note the use of .parent
    this.route.parent.params.subscribe(params =>
      console.log(`The parent params: ${params}`)
    );
  }
}