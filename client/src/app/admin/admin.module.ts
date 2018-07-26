import { AdminaboutComponent } from './adminabout/adminabout.component';
import { AdminapplyComponent } from './adminapply/adminapply.component';
import { AdmincareersComponent } from './admincareers/admincareers.component';
import { AdmincontactUsComponent } from './admincontact-us/admincontact-us.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, AdminhomeComponent, AdminaboutComponent,
    AdminapplyComponent, AdmincareersComponent, AdmincontactUsComponent, AdminservicesComponent]
})
export class AdminModule { }
