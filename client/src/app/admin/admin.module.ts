import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, AboutComponent, ApplyComponent, CareersComponent, ContactUsComponent, HomeComponent, ServicesComponent]
})
export class AdminModule { }
