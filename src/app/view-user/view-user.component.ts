import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  userList: Array<any>;

  constructor(private loginService:LoginService, private route:ActivatedRoute) {
    // this.loginService.getUsers()
    // .subscribe(res=>{
    //   console.log("viewUser data",res.users);
    //  })
  }

  ngOnInit() {
    let userId = this.route.snapshot.params['id'];
    console.log("userId",userId);
    this.loginService.fetchUserId(userId);
  }

}
