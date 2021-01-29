import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginUserData = {};
  url: string;

  constructor(
    private _auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
      this.url = '/blog';
  }

  loginUser() {
     this._auth.loginUser(this.loginUserData)
     .subscribe(
     res => this.router.navigateByUrl(this.url),
     err => console.log(err)
     )
  }

}
