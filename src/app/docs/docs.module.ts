import { NgModule } from '@angular/core';
import {DocRoutingModule} from './docs.router';
import { BrowserModule } from '@angular/platform-browser';
import { StaffComponent } from './staff/staff.component';
import { ClientComponent } from './client/client.component';
import { DocsComponent } from './doc/docs.component';
import { DocListService } from '../docs/service/doc-list.service'

@NgModule({
 declarations: [
     StaffComponent,
     ClientComponent,
     DocsComponent
 ],
 imports: [
    BrowserModule, DocRoutingModule 
 ],
 providers: [ DocListService ]
})

export class DocsModule {
    
}