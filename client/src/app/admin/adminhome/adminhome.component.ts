import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '../../../../node_modules/@kolkov/angular-editor';
import { HomeService } from '../../shared/services/home.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  home;
  data;
  pages;
  pagesCopy;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '100px',
    minHeight: '100px',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
  };

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
        this.pagesCopy = Object.entries(pages).map(page => {
          const formattedPage = { ...page };
          return formattedPage;
        });
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

  setID(key) {
    return `#${key}`
  }

  saveBody(index, body) {
    // aboutUs, careers, services, contact_us
    console.log(index);
    console.log(body);

    this.data.pages[index] = body;
    // console.log(this.data.pages);
    const editBody = {
      aboutUs: this.data.pages.about_us,
      careers: this.data.pages.careers,
      services: this.data.pages.services,
      contact_us: this.data.pages.contact_us
    }
    console.log(editBody);

    this.homeService.editHome(editBody).subscribe(
      () => {
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
            this.pagesCopy = Object.entries(pages).map(page => {
              const formattedPage = { ...page };
              return formattedPage;
            });
          }
        )
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
