import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  // Interval, in milliseconds (Enter a negative number or 0 to stop the interval.):
  myInterval: number = 1500;

  // carousel will not cycle continuously and will have hard stops
  // either we set the interval 0 or set noWrap attribute true
  noWrapSlides:boolean = true;

  // Index of currently displayed slide(started for 0)
  activeSlideIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
