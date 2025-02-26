import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRegister, ILogin } from '../interfaces/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(loginDetails: ILogin): Observable<any> {
    return this.httpClient.post(
      "http://localhost:8081/authentication/login",
      loginDetails
    )
  }

  register(registerDetails: IRegister): Observable<any> {
    return this.httpClient.post( 
      "http://localhost:8081/authentication/register",
      registerDetails
    )
  }

}
