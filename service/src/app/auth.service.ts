import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/register" // todo: use base url from environment.ts
  private _loginUrl = "http://localhost:3000/login"

  constructor(private http: HttpClient) { }

  registerUser(user) {
     return this.http.post<any>(this._registerUrl, user); // todo: no any, add interface
  }

  loginUser(user) {
     return this.http.post<any>(this._loginUrl, user);
  }
}
