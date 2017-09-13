import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  singleModel: string = '1';
  checkModel:any = {left: false, middle: true, right: false};
  radioModel: string = 'Middle';
  
  constructor() { }

  ngOnInit() {
  }

}
