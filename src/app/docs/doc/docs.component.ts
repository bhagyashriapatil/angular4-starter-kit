import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { StaffComponent } from '../staff/staff.component';
import { DocListService } from '../service/doc-list.service'

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})

export class DocsComponent implements OnInit {
  
  // @ViewChild(StaffComponent)
  // userlist: StaffComponent;
  
  sub: Object;
  user: Array<any>;
  userlist: any;

  constructor(private appRoutes: ActivatedRoute, public service:DocListService) {
    console.log("this.service.getData()",this.service.getData());
    // this.service.getData();
    this.userlist = this.service.getData();
  }

  ngOnInit() {
    console.log("this.service.getData()",this.service.getData())
    
    // if(){
      this.user = this.service.getData();
      console.log("this.user",this.user);
    // }
    this.sub = this.appRoutes.data.subscribe(v => console.log("vvv",v));
  }

}
