import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'button-component';
  count = 0;

  onEvent(count: number) {
    this.count = count;
  }
}
