import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgetbox',
  templateUrl: './widget-box.component.html',
  styleUrls: ['./widget-box.component.scss']
})
export class WidgetBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onProgressClick() {
    const element = document.createElement('progress-widget');
    element['progress'] = 50;
    element['title'] = 'My progress';
    this.appendDom(element);
  }

  appendDom(ele: HTMLElement) {
    const row = document.createElement('div');
    row.setAttribute('class', 'row mt-2');

    const col = document.createElement('div');
    col.setAttribute('class', 'col');

    col.appendChild(ele);
    row.appendChild(col);

    document.getElementById('widget-area').appendChild(row);
  }

  onRatingClick() {
    const element = document.createElement('rating-widget');
    element['rating'] = 5;
    element['title'] = 'My progress';
    this.appendDom(element);
  }
}
