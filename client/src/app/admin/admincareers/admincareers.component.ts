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
  oldtitle;
  oldbody;
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
      this.oldtitle = result.result[0].title;
      this.body = result.result[0].body;
      this.oldbody = result.result[0].body;
    }, error => {
      console.log(error.error.error);
    });
  }

  saveTitle(text: string) {
    this.title = text;
    this.oldtitle = text;
    this.isEditingTitle = false;
    this.careersService.editCareers(text, this.body).subscribe((result) => {
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
    this.careersService.editCareers(this.title, text).subscribe((result) => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  editBody() {
    this.body = this.oldbody;
    this.isEditingBody = !this.isEditingBody;
  }

  ngOnInit() {
    this.getCareers();
  }

}
