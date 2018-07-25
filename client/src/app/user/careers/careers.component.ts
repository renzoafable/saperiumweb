import { Component, OnInit } from '@angular/core';

import { CareersService } from '../../shared/services/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  title = 'Careers';
  body = 'Sum stuff here';
  constructor(private careersService: CareersService) { }

  getCareers() {
    this.careersService.getCareers().subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error.error.error);
    });
  }

  ngOnInit() {
    this.getCareers();
  }

}
