import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ListService } from './service/list.service';
import { LoginService } from './login/login.service';

interface Bhagu{
  first:string;
  callShivam():string;  
}
@Injectable()
export class AuthguardGuard implements CanActivate, CanActivateChild, Bhagu {
  public first;
  constructor(public router: Router, public service: LoginService) {
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }
  callShivam(){
    return "paa"
  }
  canActivate(): boolean {
    // this.service.getUsers()
    // .subscribe(res=>{
    //   console.log("yes authenticated",this.service.getUsers())
    //   return true;
    // },err=>{
    //   alert("You are not authorized user");
    //   this.router.navigate(['/login']);
    //   return false;
    // })
    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log("currentUser.token",currentUser);
    if (this.service.getUserLoggedIn()) {
      return true;
    }
    else {
      alert("You are not authorized user");
      this.router.navigate(['/login']);
      return false;
    }
  }

  
}
