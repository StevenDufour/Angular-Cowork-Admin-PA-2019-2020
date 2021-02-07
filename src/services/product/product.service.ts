import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  createProduct(formData): Observable<any> {
    return this.httpClient.post<any>(this.http + '/api/product/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/product/getById/' + id);
  }

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/product/getAll');
  }

  deleteProduct(id): Observable<any> {
    return this.httpClient.delete<any>(this.http + '/api/product/delete/' + id);
  }

  updateProduct(formData): Observable<any> {
    return this.httpClient.put<any>(this.http + '/api/product/update', formData);
  }
}
