import {Component, OnInit} from '@angular/core';
import {DepartmentDto} from "../../dto/DepartmentDto";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DepartmentService} from "../../services/department.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  departmentDto: DepartmentDto = new DepartmentDto();
  departmentDtoList: Array<DepartmentDto> = new Array<DepartmentDto>();




  ngOnInit(): void {
    this.getAllDepartments();
  }

  constructor(private message: ToastrService, private departmentService: DepartmentService, private router: Router) {
  }

  clearData() {

    this.departmentDto = new DepartmentDto();

  }

  addDepartment() {
    if (this.departmentDto.departmentName === undefined) {
      this.message.warning("Please Enter Department Name ");
      return;
    }
    if (this.departmentDto.description === undefined) {
      this.message.warning("Please Enter Description");
      return;
    }

    this.departmentService.addDepartment(this.departmentDto).subscribe(obj => {
      this.message.success("Department Saved Successfully !!!");
      this.getAllDepartments();
      this.departmentDto = new DepartmentDto();
    })
  }

  confirmDelete(id: any) {
    if (confirm("Are you sure you want to delete this department?")) {
      this.deleteDepartment(id);
    }
  }


  deleteDepartment(id:any) {
    this.departmentService.deleteDepartment(id).subscribe(obj => {
      this.message.success("Department Deleted Successfully !!!");
      this.getAllDepartments();
    });
  }


  private getAllDepartments() {
    this.departmentService.getAllDepartments().subscribe(obj => {
      this.departmentDtoList = obj;
    })


  }


  editDepartment(obj: DepartmentDto) {
    this.departmentDto = obj;
  }
}
