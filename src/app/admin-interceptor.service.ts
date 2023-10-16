import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticatorService } from './authenticator.service';
import { AdminauthService } from './adminauth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminInterceptorService {
  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth=this.injector.get(AdminauthService);
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization: `Bearer ${auth.getToken()}`      }
    });
    return next.handle(tokenizedReq);
  }
  
}
