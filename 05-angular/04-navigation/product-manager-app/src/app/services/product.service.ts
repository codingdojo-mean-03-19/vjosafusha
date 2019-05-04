import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  getProductByID(id: string): Observable<Product> {
    return this.http.get<Product>(`/${id}`);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('/', product);
  }

  editProduct(editProduct: Product): Observable<Product> {
    return this.http.put<Product>(`/${editProduct._id}`, editProduct);
  }

  deleteProduct(id: String): Observable<Product> {
    return this.http.delete<Product>(`/${id}`);
  }
}
