import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  createProduct(formData): Observable<any> {
    return this.httpClient.post<any>('/api/product/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>('/api/product/getById/' + id);
  }

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>('/api/product/getAll');
  }

  deleteProduct(id): Observable<any> {
    return this.httpClient.delete<any>('/api/product/delete/' + id);
  }

  updateProduct(formData): Observable<any> {
    return this.httpClient.put<any>('/api/product/update', formData);
  }
}
