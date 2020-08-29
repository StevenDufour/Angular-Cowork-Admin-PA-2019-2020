import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>('/api/user/getAll');
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete<any>('/api/user/delete/' + id);
  }
}
