import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    PopoverModule.forRoot()
  ],
  declarations: []
})
export class NgxModule { }
