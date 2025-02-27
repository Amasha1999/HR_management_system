import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {DepartmentDto} from "../dto/DepartmentDto";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends ApiService{
  constructor(private http: HttpClient) {
    super();
  }
  addDepartment(departmentDto:DepartmentDto): Observable<DepartmentDto> {
    return this.http.post<DepartmentDto>(this.MAIN_URL + this.URL + '/addDepartment',departmentDto);
  }
  getAllDepartments(): Observable<Array<DepartmentDto>> {
    return this.http.get<Array<DepartmentDto>>(this.MAIN_URL + this.URL + '/getAllDepartments');
  }
  deleteDepartment(departmentId: any): Observable<boolean> {
    const params = new HttpParams()
      .set('departmentId', departmentId);
    return this.http.post<boolean>(this.MAIN_URL + this.URL + '/deleteDepartment', params);
  }



}
