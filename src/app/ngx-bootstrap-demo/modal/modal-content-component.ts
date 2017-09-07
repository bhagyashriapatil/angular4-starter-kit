import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

/* This is a component which we pass in modal*/

@Component({
 selector: 'modal-content',
 template: `
   <div class="modal-header">
     <h4 class="modal-title pull-left">{{title}}</h4>
     <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
   <div class="modal-body">
     <ul *ngIf="list.length">
       <li *ngFor="let item of list">{{item}}</li>
     </ul>
   </div>
   <div class="modal-footer">
     <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
   </div>
 `
})
export class ModalContentComponent {
 public title: string;
 public list: any[] = [];
 constructor(public bsModalRef: BsModalRef) {}
}
