import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  title = 'Services';
  body = 'sum stuff';
  getServices() {
    this.servicesService.getServices().subscribe((result) => {
      this.title = result.result[0].title;
      this.body = result.result[0].body;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getServices();
  }

}
