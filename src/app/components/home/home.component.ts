import { Component, OnInit } from '@angular/core';
import { Employee, Employees } from 'src/app/models/Employee';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterForm:NgForm
  employees: Employees[] = []
  filtered: Employees[] = []
  filterType: string = "Salary";
  filterStatus: string = "Between";
  constant: any;
  from: any;
  to: any;
  language='English'
  config: any;

  constructor(private employeesService: EmployeesService, private modalService: NgbModal) { }
  ngOnInit() {
    this.getEmployees()
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.employees.length,
      pageSizes:[10,20,100,200]

    };
 
  }
  getEmployees() {
    this.employees = this.employeesService.getEmployeesJson()
    this.filtered = this.employees;
  }
  search(filterBy) {
    if (filterBy) {
      filterBy = filterBy.target.value.toLocaleLowerCase();
      this.filtered = this.employees.filter((employee: Employee) =>
        employee.fullName_FL.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filtered = this.employees;
    }

  }

  filter(filterType, filterStatus, from, to, constant) {
    if (filterType == 'Date') {
      this.filterByDate(filterStatus, from, to, constant)
    } else {
      this.filterBySalary(filterStatus, from, to, constant)
    }
    this.resetFormFilter()

  }

  filterBySalary(filterStatus, from, to, salary) {
    switch (filterStatus) {
      case 'Between':
        this.filtered = this.employees.filter((employee: Employee) => employee.firstContractingSalary >= from && employee.firstContractingSalary <= to)
        break;
      case 'Before':
        this.filtered = this.employees.filter((employee: Employee) => employee.firstContractingSalary <= salary)
        break;
      case 'After':
        this.filtered = this.employees.filter((employee: Employee) => employee.firstContractingSalary >= salary)
        break;
      default:
        this.filtered = this.employees
    }


  }
  filterByDate(filterStatus, startDate, endDate, date) {
    switch (filterStatus) {
      case 'Between':
        this.filtered = this.employees.filter((employee: Employee) => employee.hiringDate >= startDate && employee.hiringDate <= endDate)
        break;
      case 'Before':
        this.filtered = this.employees.filter((employee: Employee) => employee.hiringDate <= date)

        break;
      case 'After':
        this.filtered = this.employees.filter((employee: Employee) => employee.hiringDate >= date)

        break;
      default:
        this.filtered = this.employees

    }

  }

  resetFormFilter(){
    this.from=null;
    this.to=null;
    this.constant=null  
  }

  closeResult
  open(content) {
    this.modalService.open(content).result
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  handlePageSizeChange(event) {
    this.config.itemsPerPage = event.target.value;
    this.config.currentPage = 1;
    this.getEmployees();
  }
 








}
