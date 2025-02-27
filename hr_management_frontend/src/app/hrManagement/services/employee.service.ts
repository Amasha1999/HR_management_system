
import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentDto} from "../dto/DepartmentDto";
import {EmployeeDto} from "../dto/EmployeeDto";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{
  constructor(private http: HttpClient) {
    super();
  }

  addEmployee(employeeDto: EmployeeDto) {
    return this.http.post<EmployeeDto>(this.MAIN_URL + this.URL + '/addEmployee', employeeDto);
  }
  getAllEmployees(): Observable<Array<EmployeeDto>> {
    return this.http.get<Array<EmployeeDto>>(this.MAIN_URL + this.URL + '/getAllEmployees');
  }
  deleteEmployee(employeeId: any): Observable<boolean> {
    const params = new HttpParams()
      .set('employeeId', employeeId);
    return this.http.post<boolean>(this.MAIN_URL + this.URL + '/deleteEmployee', params);
  }


}
