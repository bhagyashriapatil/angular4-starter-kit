import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.css']
})
export class SortableComponent implements OnInit {

  // data: Observable<any>;
  // activeItemIndex: number = -1;
  itemStringsLeft: Array<object>;

  constructor(private loginService: LoginService) {
    // this.data = this.loginService.getUsers();

    this.itemStringsLeft = [
      { id: 1, name: 'Bhagyashri' },
      { id: 2, name: 'Rajshree' },
      { id: 3, name: 'Dnyaneshwari' }
    ];

  }

  ngOnInit() {
  }

}
