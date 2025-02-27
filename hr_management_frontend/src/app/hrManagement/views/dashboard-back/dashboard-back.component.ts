import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";



import {HttpParams} from "@angular/common/http";


@Component({
  selector: 'app-dashboard-back',
  templateUrl: './dashboard-back.component.html',
  styleUrls: ['./dashboard-back.component.scss']
})
export class DashboardBackComponent implements OnInit {

  selectedSubListItem: string | null = null;




  userType!: number;
  UserOption: boolean = false;






  jobIds: Set<number> = new Set<number>();

  postDate: any;
  fromDate1: any;
  fromDate2: any;
  toDate1: any;

  toDate2: any;
  date: any;
  fromDate: any;
  toDate: any;
  acSubCode: any;
  debtorState: number = 0;
  creditorState: number = 0;
  searchTerm = '';
  configFinance!: number;
  selectedOption: any;
  isDateRangeChecked: boolean = false;
  isAllChecked: boolean = false;
  isDepartmentChecked: boolean = false;
  isSubDepartmentChecked: boolean = false;
  acYear: any;
  deptNo: any;
  periodStartDate: any;
  subDeptNo: any;
  accountNo: any;
  beggingBalance: any;
  selectedAccountNo: any;
  statementDate: any;
  bankBalance: any;
  month1: any;


  month2: any;
  month3: any;

  tableData: Array<any> = [];

  vatRadio:any;


  ngOnInit(): void {




  }


  constructor(private message: ToastrService,
              private router: Router, ) {
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  loadPage(url: string) {
    this.router.navigate([url]);
  }



  toggleSubList(item: string): void {
    // Toggle the display of the selected sub-list
    // @ts-ignore
    this.showSubList[item] = !this.showSubList[item];
  }

  selectSubListItem(item: string): void {
    this.selectedSubListItem = item;
    // Add any other logic you want to perform when a sub-list item is selected
  }





}
