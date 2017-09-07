import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typehead',
  templateUrl: './typehead.component.html',
  styleUrls: ['./typehead.component.css']
})
export class TypeheadComponent implements OnInit {

  selected: string;
  district: Array<string>;

  constructor() {

    this.district = [
      "Ahmadnagar", "Aurangabad", "Akola", "Beed","Bhandara","Chandrapur","Dhule","Pune","Satara"
    ]

   }

  ngOnInit() {
  }

}
