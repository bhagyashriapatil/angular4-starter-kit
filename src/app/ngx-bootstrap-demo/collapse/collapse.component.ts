import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {

  isCollapsed:boolean = false;

  constructor() { }

  public collapsed(event:any):void {
    // console.log(event);
  }
 
  public expanded(event:any):void {
    // console.log(event);
  }

  ngOnInit() {
  }

}
