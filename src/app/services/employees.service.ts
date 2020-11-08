import { Injectable } from '@angular/core';
import { Employess } from '../models/Employees.json'


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees = []

  constructor() { }

  getEmployeesJson() {
    this.employees = Employess.employeesObject.data.employees
    return this.employees

  }
}
