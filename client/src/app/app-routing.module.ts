import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './user/about/about.component';
import { AdminaboutComponent } from './admin/adminabout/adminabout.component';
import { AdminapplyComponent } from './admin/adminapply/adminapply.component';
import { AdmincareersComponent } from './admin/admincareers/admincareers.component';
import { AdmincontactUsComponent } from './admin/admincontact-us/admincontact-us.component';
import { AdminservicesComponent } from './admin/adminservices/adminservices.component';
import { ApplyComponent } from './user/apply/apply.component';
import { CareersComponent } from './user/careers/careers.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { NgModule } from '@angular/core';
import { ServicesComponent } from './user/services/services.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about/admin', component: AdminaboutComponent },
  { path: 'apply/admin', component: AdminapplyComponent },
  { path: 'careers/admin', component: AdmincareersComponent },
  { path: 'contact-us/admin', component: AdmincontactUsComponent },
  { path: 'home/admin', component: HomeComponent },
  { path: 'services/admin', component: AdminservicesComponent },
  { path: 'login/admin', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
