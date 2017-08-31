import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  clientData: Array<any>;

  constructor() { 
    this.clientData = [
      {
        "id":1,
        "name": "Kristi",
        "project": "LIS"
      },
      {
        "id":2,
        "name": "Vivek",
        "project": "10i"
      },
      {
        "id":3,
        "name": "Sara",
        "project": "NFL"
      }
    ]
  }

  

  ngOnInit() {
  }

}
