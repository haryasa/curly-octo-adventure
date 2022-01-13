import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartCircleComponent } from './org-chart-circle/org-chart-circle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrgChartPageComponent } from './org-chart-page/org-chart-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { OrgChartFuturisticComponent } from './org-chart-futuristic/org-chart-futuristic.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartCircleComponent,
    OrgChartCircleComponent,
    OrgChartPageComponent,
    OrgChartFuturisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
