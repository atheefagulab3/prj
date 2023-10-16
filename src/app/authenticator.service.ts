import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
//   private apiUrl =  `https://localhost:7154/api/Authorize`

//   constructor(private http: HttpClient) { }

//  User(UserName: string, password: string , Email: string): Observable<any> {
//     const userData = {
//       UserName :UserName,
//       Password: password,
//       Email : Email
//     };

//     return this.http.post<any>(`${this.apiUrl}`, userData).pipe(
//       tap((response) => {
//         console.log('API response:', response);
//       console.log('Token:', response.token);
//       // Store the token in local storage
//       try {
//         localStorage.setItem('token', response.token);
//         console.log('Token stored in local storage');
//         const storedToken = localStorage.getItem('token');
//        console.log('Retrieved token from local storage:', storedToken);
//       } catch (error) {
//         console.error('Error storing token in local storage:', error);
//       }
//       }))
//   }
constructor(private http: HttpClient) { }
  User(UserName: string, password: string , Email: string) {
    const signInData = { UserName, password,Email };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Treat the response as plain text
    };

    return this.http.post<string>(`https://localhost:7154/api/Authorize`, signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
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
  clearToken() {
    return localStorage.removeItem('jwtToken');
  }
}
