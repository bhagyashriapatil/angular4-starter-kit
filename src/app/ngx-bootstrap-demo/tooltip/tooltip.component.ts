import { Component, OnInit } from '@angular/core';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';

// set defaults properties to tootip
// such override allows to keep some initial values
// export function getAlertConfig(): TooltipConfig {
//   return Object.assign(new TooltipConfig(), {placement: 'right', container: 'body'});
// }

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
  // providers: [{provide: TooltipConfig, useFactory: getAlertConfig}]
})

export class TooltipComponent implements OnInit {
   
  // dynamic content
  content: string = 'tooltip content can contain any html template';

  // dynamic html
  html:string = `<div class="btn btn-danger">Never trust not sanitized HTML!!!</div>`;

  constructor() { }

  ngOnInit() {
  }

}
