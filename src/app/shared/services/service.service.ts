import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  urlPopulares: string = 'https://kitsu.io/api/edge/trending/anime?limit=5';
  urlEmision: string = 'https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count';
  urlEsperado: string = 'https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count';
  urlEvaluado: string = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating';
  urlMasPopu: string = 'https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count';
  urlCategorias: string = 'https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count';
  urlGallery: string = 'https://kitsu.io/api/edge/anime?fields%5Banime%5D=slug%2CcanonicalTitle%2Ctitles%2CposterImage%2Cdescription%2CaverageRating%2CstartDate%2CpopularityRank%2CratingRank%2CyoutubeVideoId&page%5Boffset%5D=0&page%5Blimit%5D=20&sort=-user_count';
  constructor(private http:HttpClient) { }

  getGallery() {
    return this.http.get(this.urlGallery)
  }

  getPopular(){
    return this.http.get(this.urlPopulares)
  }
  getEmision(){
    return this.http.get(this.urlEmision)
  }
  getEsperado(){
    return this.http.get(this.urlEsperado)
  }
  getEvaluado(){
    return this.http.get(this.urlEvaluado)
  }
  getMasPopu(){
    return this.http.get(this.urlMasPopu)
  }
  getCategoria(){
    return this.http.get(this.urlCategorias)
  }
}
