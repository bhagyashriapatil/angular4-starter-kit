import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {

  public bsValue: any ;
  public bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

}
