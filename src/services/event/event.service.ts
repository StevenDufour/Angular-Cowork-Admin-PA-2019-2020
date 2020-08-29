import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  createEvent(formData): Observable<any> {
    return this.httpClient.post<any>('/api/event/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>('/api/event/getById/' + id);
  }

  getAllEvents(): Observable<any> {
    return this.httpClient.get<any>('/api/event/getAll');
  }

  deleteEvent(id): Observable<any> {
    return this.httpClient.delete<any>('/api/event/delete/' + id);
  }

  updateEvent(formData): Observable<any> {
    return this.httpClient.put<any>('/api/event/update', formData);
  }
}
