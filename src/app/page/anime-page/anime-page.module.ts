import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimePageRoutingModule } from './anime-page-routing.module';
import { AnimePageComponent } from './anime-page.component';


@NgModule({
  declarations: [
    AnimePageComponent
  ],
  imports: [
    CommonModule,
    AnimePageRoutingModule
  ]
})
export class AnimePageModule { }
