import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { RatingComponent } from './rating/rating.component';
import { NgbProgressbarModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [ProgressComponent, RatingComponent],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    NgbRatingModule
  ],
  entryComponents: [
    ProgressComponent,
    RatingComponent
  ]
})
export class WidgetsModule {

  constructor(injector: Injector) {

    customElements.define(
      'progress-widget',
      createCustomElement(ProgressComponent, { injector })
    );

    customElements.define(
      'rating-widget',
      createCustomElement(RatingComponent, { injector })
    );
  }

}
