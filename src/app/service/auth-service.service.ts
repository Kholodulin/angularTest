import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private loginUrl = 'api/login';
  private logoutUrl = 'api/logout';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const authData = btoa(username+":"+password);
    const headers = new HttpHeaders({Authorization: `Basic ${authData}`});

    return this.http.post<any>(this.loginUrl,null, { headers });
  }
  logout():  Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>(this.logoutUrl, null,{headers});
  }
}
//c3R1ZGVudDoxMjM0
