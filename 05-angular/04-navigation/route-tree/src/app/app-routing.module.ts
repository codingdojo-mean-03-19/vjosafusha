import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
