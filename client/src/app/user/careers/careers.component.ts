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
  test = '<h1><b>Charan</b></h1>';
  inputtext;
  constructor(private careersService: CareersService) { }

  getCareers() {
    this.careersService.getCareers().subscribe((result) => {
      this.title = result.result[0].title;
      this.body = result.result[0].body;
    }, error => {
      console.log(error.error.error);
    });
  }

  ngOnInit() {
    this.getCareers();
  }

}
