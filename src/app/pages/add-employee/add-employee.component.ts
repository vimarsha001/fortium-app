import { Component } from '@angular/core';
import { EmployeeService } from '../../service/EmployeeService';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-add-employee',
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
  private id=0;
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  }
  onlick(event:Event){ 
    this.id++;
    const fullName = document.getElementById("fullName") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const phone = document.getElementById("phone") as HTMLInputElement;
    const department = document.getElementById("department") as HTMLSelectElement;
    const now: Date = new Date();
    const localTime: string = now.toLocaleTimeString();

      const employee : Employee = {
      id: this.id,
      fullName: fullName.value,
      email: email.value,
      department: department.value,
      phone: phone.value,
      createdAt: localTime,
      updatedAt: localTime
    }

    this.employeeService
    .addEmployee(employee)
    .subscribe(employee => this.employees.push(employee));


  }  
}
