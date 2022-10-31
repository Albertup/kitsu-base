import { GlobalComponentComponent } from '../../shared/component/global-component/global-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    GlobalComponentComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HttpClientModule
  ]
})
export class HomePageModule { }
