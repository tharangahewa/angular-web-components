import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() label = 'poke';
  @Output() buttonClick = new EventEmitter();

  private count = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.count++;
    this.buttonClick.emit(this.count);
  }
}
