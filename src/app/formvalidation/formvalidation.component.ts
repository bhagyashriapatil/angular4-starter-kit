import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
  
  loginForm: Object;

  constructor() {
    this.loginForm={};
  }

  onSubmit() {
  }

  ngOnInit() {
  }

}
