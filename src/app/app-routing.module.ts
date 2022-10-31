import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import("./page/home-page/home-page.module").then(m => m.HomePageModule)
  },
  {
    path: 'anime', loadChildren: () => import("./page/anime-page/anime-page.module").then(m => m.AnimePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
