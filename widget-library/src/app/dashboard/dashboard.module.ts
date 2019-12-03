import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './dashboard/nav-bar/nav-bar.component';
import { WidgetBoxComponent } from './dashboard/widget-box/widget-box.component';
import { RouterModule, Routes } from '@angular/router';
import { WidgetAreaComponent } from './dashboard/widget-area/widget-area.component';
import { WidgetsModule } from '../widgets/widgets.module';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, NavBarComponent, WidgetBoxComponent, WidgetAreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetsModule,
  ]
})
export class DashboardModule {
}
