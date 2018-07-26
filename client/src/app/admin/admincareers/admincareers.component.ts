import { Component, OnInit } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { CareersService } from '../../shared/services/careers.service';

@Component({
  selector: 'app-admincareers',
  templateUrl: './admincareers.component.html',
  styleUrls: ['./admincareers.component.css']
})
export class AdmincareersComponent implements OnInit {

  constructor(private careersService: CareersService) { }

  title;
  body;
  htmlContent;
  isEditingTitle = false;
  isEditingBody = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '100px',
    placeholder: 'Enter text',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };


  getCareers() {
    this.careersService.getCareers().subscribe((result) => {
      this.title = result.result[0].title;
      this.body = result.result[0].body;
    }, error => {
      console.log(error.error.error);
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
    this.getCareers();
  }

}
