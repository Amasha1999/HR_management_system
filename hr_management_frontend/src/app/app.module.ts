import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from '././hrManagement/views/login/login.component';
import {DashboardBackComponent} from '././hrManagement/views/dashboard-back/dashboard-back.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {NavbarComponent} from '././hrManagement/views/navbar/navbar.component';
import {GlobalErrorHandler} from "././hrManagement/errorHandler/GlobalErrorHandler";
import {AuthService} from "././hrManagement/authServices/AuthService";
import {AuthGuard} from "././hrManagement/authServices/AuthGuard";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import { EmployeeComponent } from './hrManagement/views/employee/employee.component';
import { DepartmentComponent } from './hrManagement/views/department/department.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardBackComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      progressAnimation: 'increasing',
    }),
  ],
  providers: [AuthService, AuthGuard, GlobalErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule {
}
