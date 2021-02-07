import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  createEvent(formData): Observable<any> {
    return this.httpClient.post<any>(this.http + '/api/event/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/event/getById/' + id);
  }

  getAllEvents(): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/event/getAll');
  }

  deleteEvent(id): Observable<any> {
    return this.httpClient.delete<any>(this.http + '/api/event/delete/' + id);
  }

  updateEvent(formData): Observable<any> {
    return this.httpClient.put<any>(this.http + '/api/event/update', formData);
  }
}
