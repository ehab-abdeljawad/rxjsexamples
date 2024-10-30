import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { SubjectComponent } from './components/subject/subject.component';
import {OverlayModule} from '@angular/cdk/overlay';
import { OverlaycComponent } from './components/overlayc/overlayc.component';
import { TooltipComponent } from './components/tooltip/tooltip.component'
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ObservableComponent,
    OperatorsComponent,
    SubjectComponent,
    OverlaycComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
