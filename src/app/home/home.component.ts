import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { StarComponent } from '../star/star.component';

interface User {
  id: number;
  firstName?: string;
  LastName?: string;
  email: string;
  ratings: number;
  password: any;
  language: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // directives: [StarComponent]
})
export class HomeComponent implements OnInit {
  
  // gaurd: unothorized access to service
  // userList:Array<User[]>;  //when we use subscribe to bind array to html directly without async
  userList:Observable<any>;
  data : object;
  pageTitle: string;
  currentUser: object;
  
  
  constructor(private loginService: LoginService, private router: Router) {

    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log("currentUser",currentUser);
    // if(!Object.is({},currentUser)){
    //   localStorage.setItem('currentUser',
    //   JSON.stringify({ username: currentUser.username, token: "homeToken" }))
    // }
    
    // here we modify observable and use async pipe, without subscribe we directly bind data to html
    this.userList = this.loginService.getUsers();

    // here we use subscribe and then use of response
    // this.loginService.getUsers()
    // .subscribe(res=>{
    //  this.userList=res.users;
    // })
  }

  // onRatingClicked({message: string}): void {
  //   this.pageTitle = 'Product List: ' + message;
  // }

  onRatingClicked(event): void {
    this.pageTitle = 'Productuctive List: ' + event;
  }

  update(recvdata,index){
    if(!Object.is({},recvdata)){
      this.router.navigate(['/viewUser',index]);
    }
  }

  delete(recvdata,index) {
    // this.loginService.fetchUserId(index);
  }

  ngOnInit() {
  }

}
