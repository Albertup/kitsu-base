
import { ServiceService } from './../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global-component',
  templateUrl: './global-component.component.html',
  styleUrls: ['./global-component.component.scss']
})
export class GlobalComponentComponent implements OnInit {
  @Input() gallery: any = [];
  popularesx: any = [];
  emisionesx: any = [];
  esperadosx: any = [];
  evaluadosx: any = [];
  masPopusx: any = [];
  categoriasx:any = [];
  constructor(private popularServices: ServiceService) { }

  ngOnInit(): void {


    this.popularServices.getPopular().
  subscribe((res:any) =>{
  this.popularesx = res.data;
})
this.popularServices.getEmision().
  subscribe((res:any) =>{
  this.emisionesx = res.data;
})

this.popularServices.getEsperado().
  subscribe((res:any) =>{
  this.esperadosx = res.data;

})

this.popularServices.getEvaluado().
  subscribe((res:any) =>{
  this.evaluadosx = res.data;

})

this.popularServices.getMasPopu().
  subscribe((res:any) =>{
  this.masPopusx = res.data;
})

this.popularServices.getCategoria().
  subscribe((res:any) =>{console.log(res);
  this.categoriasx = res.data;
  console.log(res.data);

})

}

}
