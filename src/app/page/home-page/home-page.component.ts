import { ServiceService } from './../../shared/services/service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  home: any = [];

  constructor(private homeServices: ServiceService) { }

  ngOnInit(): void {

}
}
