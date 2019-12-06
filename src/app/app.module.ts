import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { BarrasComponent } from './barras/barras.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'bar-chart', component: BarrasComponent},
  {path: '**', component: BarrasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BarrasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
