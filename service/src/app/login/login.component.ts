import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
     this._auth.loginUser(this.loginUserData)
     .subscribe(
     res => console.log(res),
     err => console.log(err)
     )
  }

}
