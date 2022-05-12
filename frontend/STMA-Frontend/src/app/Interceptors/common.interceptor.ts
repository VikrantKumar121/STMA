import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var token=localStorage.getItem("token");
    var user_id=localStorage.getItem("user_id");
    if(token&&user_id){
  const newRequest= request.clone({
     headers:request.headers.set("Authorization",`Token ${localStorage.getItem("token")}`)
   });
   return next.handle(newRequest);
    }  
    






    return next.handle(request);
  }
}
