import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected MAIN_URL: string;
  // protected FORPMS_URL: string;
  protected URL: string;
  ips: string[] = [];
  constructor() {

    this.MAIN_URL = 'http://localhost:8999';

    this.URL = '/api';

  }
}
