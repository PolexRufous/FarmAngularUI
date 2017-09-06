import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ExternalComponent} from '../external/external/external.component';
import {InternalComponent} from '../internal/internal/internal.component';
import {ReportsComponent} from '../reports/reports/reports.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'external', component: ExternalComponent},
  {path: 'internal', component: InternalComponent},
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class BaseRoutingModule {
}
