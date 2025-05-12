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
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {
  }
  onclick(event:Event){ 
    const name = document.getElementById("fullName") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const phone = document.getElementById("phone") as HTMLInputElement;
    const department = document.getElementById("department") as HTMLSelectElement;
    const now: Date = new Date();
    const localTime: string = now.toLocaleTimeString();

      const employee = {
      name: name.value,
      phone: phone.value.trim(),
      email: email.value,
      department: department.value,
      createdAt: localTime,
      updatedAt: localTime
    }

    console.log(employee);
    console.log(employee.phone.length);
    
      this.employeeService
    .addEmployee(employee)
    .subscribe(employee => this.employees.push(employee));
   

    


  }  
}
