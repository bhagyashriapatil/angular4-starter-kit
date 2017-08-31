import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  
  // changes only input properties changes
  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }
  onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnInit() {
  }

}
