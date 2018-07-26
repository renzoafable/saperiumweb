import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';

import { AdminaboutComponent } from './adminabout/adminabout.component';
import { AdminapplyComponent } from './adminapply/adminapply.component';
import { AdmincareersComponent } from './admincareers/admincareers.component';
import { AdmincontactUsComponent } from './admincontact-us/admincontact-us.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [LoginComponent, AdminhomeComponent, AdminaboutComponent,
    AdminapplyComponent, AdmincareersComponent, AdmincontactUsComponent, AdminservicesComponent]
})
export class AdminModule { }
