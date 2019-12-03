import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RatingComponent implements OnInit {

  @Input() title = 'Your rating';
  @Input() rate = 8;

  constructor() {
  }

  ngOnInit() {
  }

}
