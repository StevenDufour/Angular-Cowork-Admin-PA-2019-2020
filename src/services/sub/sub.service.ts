import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  createSub(formData): Observable<any> {
    return this.httpClient.post<any>(this.http + '/api/sub/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/sub/getById/' + id);
  }

  getAllSubs(): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/sub/getAll');
  }

  deleteSub(id): Observable<any> {
    return this.httpClient.delete<any>(this.http + '/api/sub/delete/' + id);
  }

  updateSub(formData): Observable<any> {
    return this.httpClient.put<any>(this.http + '/api/sub/update', formData);
  }
}
