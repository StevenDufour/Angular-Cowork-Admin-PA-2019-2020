import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor(private httpClient: HttpClient) { }

  createSub(formData): Observable<any> {
    return this.httpClient.post<any>('/api/sub/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>('/api/sub/getById/' + id);
  }

  getAllSubs(): Observable<any> {
    return this.httpClient.get<any>('/api/sub/getAll');
  }

  deleteSub(id): Observable<any> {
    return this.httpClient.delete<any>('/api/sub/delete/' + id);
  }

  updateSub(formData): Observable<any> {
    return this.httpClient.put<any>('/api/sub/update', formData);
  }
}
