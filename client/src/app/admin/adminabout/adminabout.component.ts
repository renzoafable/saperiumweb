import { Component, OnInit } from '@angular/core';
import { AdminAboutService } from '../../shared/services/admin-about.service';
import { Router } from "@angular/router";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { withBody } from '../../../../node_modules/@angular/core/testing';
import { identifierModuleUrl } from '../../../../node_modules/@angular/compiler';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-adminabout',
  templateUrl: './adminabout.component.html',
  styleUrls: ['./adminabout.component.css']
})
export class AdminaboutComponent implements OnInit {
  data;
  testimonials;

  constructor(private service: AdminAboutService, private router: Router) {}
  
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '',
    minHeight: '100px',
    translate: 'no',
    uploadUrl: 'v1/images'
  };

  title;
  body;
  htmlContent;
  
  isEditingBody = false;
  isEditingTitle = false;
  isEditingTestimonial = false;
  isEditingName = false;
  isEditingPageTitle = false;
  isEditingPageBody = false;
  contentTitle;
  contentTestimonial;
  contentName;
  contentPageTitle;
  contentPageBody;

  editTestimonial(body: string) {
    if (this.isEditingTestimonial) this.isEditingTestimonial = false;
    else this.isEditingTestimonial = true;
    this.contentTestimonial = body;
    this.editorConfig.minHeight = '100px';
    this.isEditingName = this.isEditingTitle = false;
  }

  editName(body: string) {
    if (this.isEditingName) this.isEditingName = false;
    else this.isEditingName = true;
    this.contentName = body;
    this.editorConfig.minHeight = '50px';
    this.isEditingTitle = this.isEditingTestimonial = false;
  }

  editTitle(body: string) {
    if (this.isEditingTitle) this.isEditingTitle = false;
    else this.isEditingTitle = true;
    this.contentTitle = body;
    this.editorConfig.minHeight = '50px';
    this.isEditingName = this.isEditingName = false;
  }

  editPageTitle(body: string) {
    if (this.isEditingPageTitle) this.isEditingPageTitle = false;
    else this.isEditingPageTitle = true;
    this.contentPageTitle = body;
    this.editorConfig.minHeight = '50px';
    this.isEditingPageBody = false;
  }

  editPageBody(body: string) {
    if (this.isEditingPageBody) this.isEditingPageBody = false;
    else this.isEditingPageBody = true;
    this.contentPageBody = body;
    this.editorConfig.minHeight = '200px';
    this.isEditingPageTitle = this.isEditingBody = false;
  }

  savePageTitle(body: String){
    this.data.title = body;
    this.service.editAbout(body, this.data.body).subscribe(result => {
      this.refreshContent();
    }),
    err => {
      console.log(err.error);
    };
  }

  savePageBody(body: String){
    this.data.body = body;
    this.service.editAbout(this.data.title, body).subscribe(result => {
      this.refreshContent();
    }),
    err => {
      console.log(err.error);
    };
  }

  saveTestimonial(id: Number, note: String, name: String, title: String, file_path: String){
    this.service.editTestimonial(id, note, name, title, file_path).subscribe(result => {
      this.refreshContent();
    }),
    err => {
      console.log(err.error);
    };
  }

  ngOnInit() {
    this.refreshContent();
  }

  refreshContent(){
    this.service.viewAbout().subscribe(result => {
      this.data = result.data;
      const { testimonial } = this.data;
      this.testimonials = testimonial;
      console.log(this.data);
    }),
    err => {
      console.log(err.error);
    };
  }
}