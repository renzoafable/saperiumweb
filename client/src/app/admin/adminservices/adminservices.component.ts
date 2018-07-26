import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '../../../../node_modules/@kolkov/angular-editor';
import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'app-adminservices',
  templateUrl: './adminservices.component.html',
  styleUrls: ['./adminservices.component.css']
})
export class AdminservicesComponent implements OnInit {

  constructor(private servicesService: ServicesService) { }

  title;
  body;
  isEditingTitle = false;
  isEditingBody = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '100px',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };

  getServices() {
    this.servicesService.getServices().subscribe((result) => {
      this.title = result.result[0].title;
      this.body = result.result[0].body;
    }, error => {
      console.log(error);
    });
  }

  saveTitle(text: string) {
    this.title = text;
    this.isEditingTitle = false;
  }

  editTitle() {
    this.isEditingTitle = !this.isEditingTitle;
  }

  saveBody(text: string) {
    this.body = text;
    this.isEditingBody = false;
  }

  editBody() {
    this.isEditingBody = !this.isEditingBody;
  }

  ngOnInit() {
    this.getServices();
  }

}
