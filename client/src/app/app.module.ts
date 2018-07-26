import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CareersService } from './shared/services/careers.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
  ],
  providers: [CareersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
