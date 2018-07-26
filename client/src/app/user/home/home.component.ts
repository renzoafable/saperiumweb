import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home;
  data;
  pages;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getHome().subscribe(
      result => {
        this.home = result;
        const { data } = this.home;
        const { pages } = data;
        this.data = data;
        this.pages = Object.entries(pages).map(page => {
          const formattedPage = { ...page };
          return formattedPage;
        });
        console.log(this.pages);
      },
      err => {
        console.log(err.error);
      }
    );
  }

  setHeader(key) {
    switch (key) {
      case "contact_us":
        return "Contact Us";
      case "about_us":
        return "About Us";
      case "services":
        return "Services";
      case "careers":
        return "Careers"
    }
  }

  setRoute(key) {
    switch (key) {
      case "contact_us":
        return "/contact-us";
      case "about_us":
        return "/about";
      case "services":
        return "/services";
      case "careers":
        return "/careers";
    }
  }
}
