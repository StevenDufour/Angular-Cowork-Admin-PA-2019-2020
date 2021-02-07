import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private http = 'https://cowork-node-cloud-project.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  createService(formData): Observable<any> {
    return this.httpClient.post<any>(this.http + '/api/service/create', formData, {
      responseType: 'json'
    });
  }

  getById(id): Observable<any> {
    return this.httpClient.get<any>(this.http + '/api/service/getById/' + id);
  }

  getAllServices(): Observable<any> {
    return this.httpClient.get<any>( this.http + '/api/service/getAll');
  }

  deleteService(id): Observable<any> {
    return this.httpClient.delete<any>(this.http + '/api/service/delete/' + id);
  }

  updateService(formData): Observable<any> {
    return this.httpClient.put<any>(this.http + '/api/service/update', formData);
  }
}
