import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class ListService {

  public isUserLoggedIn;
  public redirectUrl:string;
  public password;  

  constructor(public http: Http, public router: Router) { 
    this.isUserLoggedIn=false;
  }

  reset() {
    this.isUserLoggedIn=false;
  }

  login(receiveUser):void {
    let isLogin = receiveUser.emailField==='admin@gmail.com'&&receiveUser.password==='admin'
   this.isUserLoggedIn = true;
  }
  
  getUsers(){
    return {
      first:"bhagu",
      last:"patil"
    }
  }
  
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
