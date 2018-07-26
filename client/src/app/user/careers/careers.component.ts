import { Component, OnInit } from "@angular/core";

import { CareersService } from "../../shared/services/careers.service";

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.css"]
})
export class CareersComponent implements OnInit {
  title = "Careers";
  body = "Sum stuff here";
  test = "<h1><b>Charan</b></h1>";
  inputtext;

  emailAddress;
  questions;
  answers = {};

  constructor(private careersService: CareersService) {}

  getCareers() {
    this.careersService.getCareers().subscribe(
      result => {
        this.title = result.result[0].title;
        this.body = result.result[0].body;
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  ngOnInit() {
    this.getCareers();
  }

  viewQuestions() {
    this.careersService.viewQuestion().subscribe(
      result => {
        console.log(result.data);
        this.questions = result.data;
        this.questions.forEach(question => {
          this.answers[question.question_id] = '';
        });
        console.log(this.answers);
      },
      error => {
        console.log(error.error.error);
      }
    );
  }

  addAnswer(body: String, question_id: Number, application_id: Number) {
    this.careersService.addAnswer(body, question_id, application_id).subscribe(
      result => {},
      error => {
        console.log(error.error.error);
      }
    );
  }

  sendApplication() {
    console.log(this.answers);
    console.log(this.emailAddress);
    this.careersService.addApplication(this.emailAddress).subscribe(
      (result) => {
        const application_ID = result.data.application_id;
        Object.keys(this.answers).forEach(question_ID => {
          let body, question_id, application_id;
          question_id = question_ID;
          body = this.answers[question_ID];
          application_id = application_ID;
          this.addAnswer(body, question_id, application_id)
        });
      },
      error => {
        console.log(error.error.error);
      }
    );
  }
}
