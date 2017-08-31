import { Pipe, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveForm: FormGroup;
  // post: any;             // A property for our submitted form
  description: string = '';
  name: string = '';  
  titleAlert:string = 'This field is required';
  


  constructor(private fb: FormBuilder) {
    this.reactiveForm = fb.group({
      'name': [null, Validators.required ],
      'description': [null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(5)])],
      'validate': ''     //we will have validate checkbox in html
    })
  }

  save(post) {
    console.log("post",post);
    this.description = post.description;
    this.name = post.name;
  }

  ngOnInit() {
    this.reactiveForm.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.reactiveForm.get('name').setValidators([Validators.required, Validators.minLength(2)]);
              this.titleAlert = 'You need to specify at least 2 characters';
          } else {
              this.reactiveForm.get('name').setValidators(Validators.required);
          }
          this.reactiveForm.get('name').updateValueAndValidity();

      });
  }

}
