import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OrgChartPageComponent} from './org-chart-page/org-chart-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'circle',
    pathMatch: 'full'
  },
  {
    path: 'circle',
    component: OrgChartPageComponent,
    data: {
      chartType: 'circle'
    }
  },
  {
    path: 'futuristic',
    component: OrgChartPageComponent,
    data: {
      chartType: 'futuristic'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
