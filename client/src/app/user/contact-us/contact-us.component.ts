import { Component, OnInit } from '@angular/core';

import { ContactusService } from '../../shared/services/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactUsService: ContactusService) { }

  title;
  address;
  body;
  phoneNums;

  getContactUs() {
    this.contactUsService.getContactUs().subscribe((result) => {
      this.title = result.data[0].title;
      this.body = result.data[0].body;
      this.address = result.data[0].address;
    }, error => {
      console.log(error);
    });
  }

  getPhones() {
    this.contactUsService.getPhones().subscribe((result) => {
      console.log(result.data);
      this.phoneNums = result.data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getContactUs();
    this.getPhones();
  }

}
