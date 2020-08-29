import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  createService(formData): Observable<any> {
    return this.httpClient.post<any>('/api/service/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>('/api/service/getById/' + id);
  }

  getAllServices(): Observable<any> {
    return this.httpClient.get<any>('/api/service/getAll');
  }

  deleteService(id): Observable<any> {
    return this.httpClient.delete<any>('/api/service/delete/' + id);
  }

  updateService(formData): Observable<any> {
    return this.httpClient.put<any>('/api/service/update', formData);
  }
}
