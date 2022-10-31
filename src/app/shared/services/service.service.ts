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
  constructor(private http:HttpClient) { }

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
