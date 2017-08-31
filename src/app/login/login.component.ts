import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../service/list.service';
import { Observable } from 'rxjs/Rx';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  values: '';
  data: object;
  public resolveData: any;
  isToken: object;

  constructor(private router: Router, private activeRoute:ActivatedRoute, public service: ListService, private loginService: LoginService) {
   this.data = {};
   this.service.reset();
  }
  
 login(data){
  //  localStorageService.set('key', 'value');
  // this.service.login(data);
  // localStorage.setItem('key', 'value');  //normal way
  
  // localStorage.setItem('currentUser',
  // JSON.stringify({ username: data, token: "authenticationToken" }));  //if we have object structure
  this.loginService.validateUser(data)
  .subscribe(res=>{
    localStorage.setItem('currentUser',JSON.stringify(res.data));
    if(this.loginService.getUserLoggedIn()){
      this.router.navigate(['/home']);
    }
  },err => {
    alert("Hey unauthorized user, Please enter valid credentials");
    // this.loginService.setUnauthorize();
    return Observable.throw(err);
  });

}

  onKey(event: any) {// without type info
    this.values += event.target.value + ' | '; 
  }
  // onKey(event: KeyboardEvent) { // with type info
  //   this.values += (<HTMLInputElement>event.target).value + ' | ';
  // }

  ngOnInit() {
    this.resolveData = this.activeRoute.snapshot.data['user'];
  }

}
