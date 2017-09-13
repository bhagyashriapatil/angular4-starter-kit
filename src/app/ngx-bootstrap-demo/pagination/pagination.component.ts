import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  totalItems: number = 64;
  currentPage: number = 4;
  smallnumPages: number = 0;
 
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }
 
  pageChanged(event: any): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }

  constructor() { }

  ngOnInit() {
  }

}
