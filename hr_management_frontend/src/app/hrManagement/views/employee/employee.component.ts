import {Component, OnInit} from '@angular/core';
import {UserLoginDto} from "../../dto/UserLoginDto";
import {LoginService} from "../../services/login.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {EmployeeDto} from "../../dto/EmployeeDto";
import {EmployeeService} from "../../services/employee.service";
import {DepartmentDto} from "../../dto/DepartmentDto";
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  userLoginDto = new UserLoginDto();
  employeeDto: EmployeeDto = new EmployeeDto();
  employeeDtoList: Array<EmployeeDto> = new Array<EmployeeDto>();
  employeeDtoListTemp: Array<EmployeeDto> = new Array<EmployeeDto>();
  departmentDtoList: Array<DepartmentDto> = new Array<DepartmentDto>();

textSearch:any;


  constructor(private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private message: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllEmployees();
    this.getAllDepartments();
  }


  clearData() {
    this.employeeDto = new EmployeeDto();
  }


  private getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(obj => {
      this.employeeDtoList = obj;
      this.employeeDtoListTemp = obj;
    });
  }


  addEmployee() {

    if (this.employeeDto.name === undefined) {
      this.message.warning("Please Enter Employee Name ");
      return;
    }
    if (this.employeeDto.email === undefined) {
      this.message.warning("Please Enter Email");
      return;
    }
    if (this.employeeDto.phone === undefined) {
      this.message.warning("Please Select a Phone Number ");
      return;
    }


    this.employeeService.addEmployee(this.employeeDto).subscribe(obj => {

      this.message.success("Employee Saved Successfully ");
      this.getAllEmployees();
      this.clearData();
    });
  }


  getDepartmentNameById(deptId: any): any {
    const department = this.departmentDtoList.find(dept => dept.id === deptId);
    return department ? department.departmentName : 'null';
  }

  private getAllDepartments() {
    this.departmentService.getAllDepartments().subscribe(obj => {
      this.departmentDtoList = obj;
    })

  }

  confirmDelete(id: any) {
    if (confirm("Are you sure you want to delete this Employee?")) {
      this.deleteEmployee(id);
    }
  }


  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe(obj => {
      this.message.success("Employee Deleted Successfully !!!");
      this.getAllEmployees();
    });
  }


  editEmployee(obj: EmployeeDto) {
    this.employeeDto = obj;
  }


  filterByFinAccNoAndName(event: any) {
    this.textSearch = event.target.value.toLowerCase();

    this.employeeDtoListTemp = this.employeeDtoList.filter(obj => {
      // @ts-ignore
      return obj.name.toLowerCase().includes(this.textSearch) || obj.departmentId.toLowerCase().includes(this.textSearch) || obj.jobTitle.toLowerCase().includes(this.textSearch);
    });
  }
}










