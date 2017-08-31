import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ListService } from './service/list.service';
import { LoginService } from './login/login.service';


@Injectable()
export class ListResolver implements Resolve<any> {
    constructor(private service: ListService, private router: Router, private loginService:LoginService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.getUsers()
    }

    userList(){
        return this.loginService.getUsers();
    }
}