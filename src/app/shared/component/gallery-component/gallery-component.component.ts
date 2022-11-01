import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from './../../services/service.service';

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.component.html',
  styleUrls: ['./gallery-component.component.scss']
})
export class GalleryComponentComponent implements OnInit {

  galleriesx: any = [];
  constructor(private galleryServices: ServiceService) { }


  ngOnInit(): void {
    this.galleryServices.getGallery().
  subscribe((res:any) =>{
  this.galleriesx = res.data;
})
  }

}
