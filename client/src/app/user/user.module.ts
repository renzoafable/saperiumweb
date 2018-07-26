import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';
import { CareersComponent } from './careers/careers.component';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HomeComponent, AboutComponent, CareersComponent, ServicesComponent, ContactUsComponent, ApplyComponent],
})
export class UserModule { }
