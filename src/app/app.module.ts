import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MegaMenuModule} from 'primeng/megamenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadPageComponent } from './shared/core/head-page/head-page.component';
import { FooterPageComponent } from './shared/core/footer-page/footer-page.component';
import { GalleryComponentComponent } from './shared/component/gallery-component/gallery-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadPageComponent,
    FooterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
