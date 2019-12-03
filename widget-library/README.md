#Steps in this tutorial

## Preparation
* Scaffolded a new Angular project `ng new widget-library` with Angular routing and SCSS
* Added bootstrap `npm install bootstrap`
* Created two modules, dashboard & widgets
* Setup up routing to dashboard module with lazy loading    
* Added dashboard component and its subcomponents styled using bootstrap
* Added ng-bootstrap `npm install --save @ng-bootstrap/ng-bootstrap` 
* Added progress and rating components wrapping ng-bootstrap components

## Transforming Angular Components in to Web Components
* Added Angular Elements Dependency `ng add @angular/elements`
* Added ProgressComponent & RatingComponent to entryComponents array of the [widgets module](src/app/widgets/widgets.module.ts)     
* Transformed Angular Components into Custom Elements using createCustomElement() method given by Angular Elements module
* Registered the custom element by calling the native API customElements.define() by passing in the unique html custom tag name and the WebComponent
```angular2
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
```
* Added the  widgets module to  [dashboard module](src/app/dashboard/dashboard.module.ts) so the widgets module constructor will be called and above two steps will be invoked. Can be added to app module as well.
* Added `schemas: [CUSTOM_ELEMENTS_SCHEMA]` indicating the compiler that custom elements will be used in this module.
```angular2
@NgModule({
  declarations: [DashboardComponent, NavBarComponent, WidgetBoxComponent, WidgetAreaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {
}
```
## Adding Polyfill Support
* Adding ngx-build-plus cli extension `ng add ngx-build-plus`
* Adding polyfill support `ng g ngx-build-plus:wc-polyfill` , which will update the angular.json with following scripts       
```
"scripts": [
              {
                "bundleName": "polyfill-webcomp-es5",
                "input": "node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
              },
              {
                "bundleName": "polyfill-webcomp",
                "input": "node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce-pf.js"
              }
            ]
```
## Added View Encapsulation
* Added `encapsulation: ViewEncapsulation.ShadowDom` to encapsulate the styles of external world with the component styles 
```angular2
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
```
* However this wil cause the components to loose the globally imported styles. So the bootstrap styles are directly added to the component scss. Of course in an actual scenarios only the specific styles should be added. This only for demo purposes.

```css
@import "node_modules/bootstrap/scss/bootstrap";

div {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
``` 
