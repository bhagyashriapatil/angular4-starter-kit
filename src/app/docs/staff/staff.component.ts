import { Component, OnInit } from '@angular/core';
import { DocListService } from '../service/doc-list.service'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  
  staffData: Array<any>;

  constructor(private service:DocListService) {
   this.staffData = [
     {
       "id":1,
       "name": "Balwant Padwal",
       "project": "10i"
     },
     {
       "id":2,
       "name": "Bhagyashri Patil",
       "project": "NFL"
     },
     {
       "id":3,
       "name": "Dnyaneshwari Patil",
       "project": "LIS"
     }
   ]
  }

  showClient(recvdata){
    console.log("recvdata",recvdata);
    this.service.updateData(recvdata);
    let userData = this.service.getData();
    console.log("userData",userData);

  }

  ngOnInit() {
  }

}
