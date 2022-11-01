import { GalleryComponentComponent } from './../../shared/component/gallery-component/gallery-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimePageRoutingModule } from './anime-page-routing.module';
import { AnimePageComponent } from './anime-page.component';


@NgModule({
  declarations: [
    AnimePageComponent,
    GalleryComponentComponent
  ],
  imports: [
    CommonModule,
    AnimePageRoutingModule
  ]
})
export class AnimePageModule { }
