import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { RatingComponent } from './rating/rating.component';
import { NgbProgressbarModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ProgressComponent, RatingComponent],
  exports: [
    ProgressComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    NgbRatingModule
  ]
})
export class WidgetsModule { }
