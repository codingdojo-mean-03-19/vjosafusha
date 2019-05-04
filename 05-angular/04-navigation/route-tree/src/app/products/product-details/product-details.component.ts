import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // note the use of .parent
    // this.route.parent.params.subscribe(
    this.route.params.subscribe(params => {
      console.log(params), (this.id = params['id']);
    });
    // params => console.log(`The parent params: ${params}`)

    // );
  }
}
