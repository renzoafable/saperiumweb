import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AboutService } from "../../shared/services/about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  data;
  testimonials;

  constructor(private service: AboutService, private router: Router) {}

  ngOnInit() {
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
