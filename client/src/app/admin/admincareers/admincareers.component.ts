import { Component, OnInit } from '@angular/core';

import { CareersService } from '../../shared/services/careers.service';

@Component({
  selector: 'app-admincareers',
  templateUrl: './admincareers.component.html',
  styleUrls: ['./admincareers.component.css']
})
export class AdmincareersComponent implements OnInit {

  constructor(private careersService: CareersService) { }

  title = 'Careers';
  body = 'Fake body';
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
