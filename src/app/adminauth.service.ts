import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {
  constructor(private http: HttpClient) { }
  Admin(adminName: string, adminPassword: string) {
    const signInData = { adminName, adminPassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Treat the response as plain text
    };

    return this.http.post<string>(`https://localhost:7154/api/Authorize/Admin`, signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
  getToken()
  {
    return localStorage.getItem('jwtToken');
  }
}
