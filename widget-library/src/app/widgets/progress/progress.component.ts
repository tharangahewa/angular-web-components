import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProgressComponent implements OnInit {

  @Input() title = 'Your progress';
  @Input() progress = 25;

  constructor() {
  }

  ngOnInit() {
  }

}
