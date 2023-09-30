import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FeedbackComponent } from './components/feedback/feedback.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { RegisterComponent } from './components/register/register.component';
import {JwtInterceptor} from "./interceptors/jwt.interceptor";
import {ErrorInterceptor} from "./interceptors/error.interceptor";
import { FeedbackTableComponent } from './feedback-table/feedback-table.component';
import {AdminComponent} from "./administration/admin/admin.component";
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    FeedbackComponent,
    DashboardComponent,
    RegisterComponent,
    FeedbackTableComponent,
    AdminComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},],
  exports: [
    FeedbackTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
