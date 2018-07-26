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
  success;

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
    this.oldtitle = text;
    this.isEditingTitle = false;
    this.contactUsService.editContactUs(text, this.oldaddress, this.oldbody).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  editTitle() {
    this.title = this.oldtitle;
    this.isEditingTitle = !this.isEditingTitle;
  }

  saveBody(text: string) {
    this.body = text;
    this.oldbody = text;
    this.isEditingBody = false;
    this.contactUsService.editContactUs(this.oldtitle, this.oldaddress, text).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
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
    this.contactUsService.editContactUs(this.oldtitle, text, this.oldbody).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  editAddress() {
    this.address = this.oldaddress;
    this.isEditingAddress = !this.isEditingAddress;
  }

  addMessage(email: string, fn: string, ln: string, body: string) {
    this.contactUsService.addMessage(email, fn, ln, body).subscribe((result) => {
      console.log(result);
      this.success = true;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getContactUs();
    this.getPhones();
  }

}
