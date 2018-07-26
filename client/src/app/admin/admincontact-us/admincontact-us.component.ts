import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '../../../../node_modules/@kolkov/angular-editor';
import { ContactusService } from '../../shared/services/contactus.service';

@Component({
  selector: 'app-admincontact-us',
  templateUrl: './admincontact-us.component.html',
  styleUrls: ['./admincontact-us.component.css']
})
export class AdmincontactUsComponent implements OnInit {

  constructor(private contactUsService: ContactusService) { }

  title;
  oldtitle;
  address;
  oldaddress;
  body;
  oldbody;
  phoneNums;

  htmlContent;
  isEditingTitle = false;
  isEditingBody = false;
  isEditingAddress = false;
  isEditingPhones = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50px',
    minHeight: '50px',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };

  getContactUs() {
    this.contactUsService.getContactUs().subscribe((result) => {
      this.title = result.data[0].title;
      this.oldtitle = result.data[0].title;
      this.body = result.data[0].body;
      this.oldbody = result.data[0].body;
      this.address = result.data[0].address;
      this.oldaddress = result.data[0].address;
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

  saveTitle(text: string) {
    this.title = text;
    this.isEditingTitle = false;
  }

  editTitle() {
    this.title = this.oldtitle;
    this.isEditingTitle = !this.isEditingTitle;
  }

  saveBody(text: string) {
    this.body = text;
    this.isEditingBody = false;
  }

  editBody() {
    this.body = this.oldbody;
    this.isEditingBody = !this.isEditingBody;
  }

  savePhones(text: string) {
    this.phoneNums = text;
    this.isEditingPhones = false;
  }

  editPhones() {
    this.isEditingPhones = !this.isEditingPhones;
  }

  saveAddress(text: string) {
    this.address = text;
    this.oldaddress = text;
    this.isEditingAddress = false;
  }

  editAddress() {
    this.address = this.oldaddress;
    this.isEditingAddress = !this.isEditingAddress;
  }

  ngOnInit() {
    this.getContactUs();
    this.getPhones();
  }

}
