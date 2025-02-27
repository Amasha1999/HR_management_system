import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./hrManagement/views/login/login.component";
import {DashboardBackComponent} from "./hrManagement/views/dashboard-back/dashboard-back.component";
import {EmployeeComponent} from "./hrManagement/views/employee/employee.component";
import {DepartmentComponent} from "./hrManagement/views/department/department.component";
import {AuthGuard} from "./hrManagement/authServices/AuthGuard";


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard-back',
    component: DashboardBackComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employee',
        component: EmployeeComponent
      },
      {
        path: 'department',
        component: DepartmentComponent
      }


    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
