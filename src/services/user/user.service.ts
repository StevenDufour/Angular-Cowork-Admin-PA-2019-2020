import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/user/getAll');
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete<any>(this.http + '/api/user/delete/' + id);
  }
}
