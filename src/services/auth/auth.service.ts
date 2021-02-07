import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  login(formData): Observable<any> {
    return this.httpClient.post<any>(this.http + 'api/auth/login', formData, {
      responseType: 'json'
    });
  }

  getUser(): Observable<string> {
    let token = localStorage.getItem('authorization');
    if (token == null) {
      token = '';
    }
    const headers = {authorization: token};
    return this.httpClient.get<string>(this.http + 'api/auth/getUser', {headers});
  }

}
