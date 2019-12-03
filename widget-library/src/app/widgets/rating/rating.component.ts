import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() title = 'Your rating';
  @Input() rate = 8;

  constructor() {
  }

  ngOnInit() {
  }

}
