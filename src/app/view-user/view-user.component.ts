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
  isValidUser: object;

  constructor(private loginService:LoginService, private router:Router, private route:ActivatedRoute) {

  }

  save(recvdata){
    // console.log("recvdata",recvdata);
    this.loginService.setEmpList(recvdata);
    this.router.navigate(['home']);
  }
// 
  ngOnInit() {
    let userId = this.route.snapshot.params['id'];

    // this.loginService.fetchUserId(userId);

    this.loginService.getUsers()
    .subscribe(res=>{
      this.isValidUser = res.find((obj,index,array)=>{
        if(index==userId){
          return obj;
        }
      })
    })

  }

}
