import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserLoginDto} from "../dto/UserLoginDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiService{
  constructor(private http: HttpClient) {
    super();
  }

  userLogin(userLoginDto: UserLoginDto):Observable<UserLoginDto> {
    return this.http.post<UserLoginDto>(this.MAIN_URL + this.URL + '/userLogin', userLoginDto);
  }


}
