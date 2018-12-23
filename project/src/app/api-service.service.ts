import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  retrievePosts(): Observable<any> {
    return this.http.get<any>(`${environment.url}api/admin/get/posts`)
  }
  retrieveManifest(date): Observable<any> {
    return this.http.get<any>(`${environment.url2}api/grainsbazaar/manifest/${date}/`)
  }
}
