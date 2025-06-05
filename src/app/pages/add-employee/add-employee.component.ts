import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/EmployeeService';
import { Employee } from '../../model/Employee';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit{
  employee: Employee = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    department: '',
    createdAt: '',
    updatedAt: '',
  };
  listOfEmployees: any = [];
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAllEmployees();
  }
  onSubmit(name: string,phone: string,email: string, department: string) {
    console.log(this.listOfEmployees);
    const now: Date = new Date();
    const localTime: string = formatDate(now, 'HH:mm:ss', 'en-US');
    for (let index = 0; index < this.listOfEmployees.length; index++) {
      if (this.listOfEmployees[index].email==email) {
        alert("User alrready exists!!")
      }else{
        this.employee.name=name;
        this.employee.phone=phone;
        this.employee.email=email;
        this.employee.department=department;
        this.employee.createdAt=localTime;
        this.employee.updatedAt=localTime;

        this.employeeService.addEmployee(this.employee).subscribe();
      }   
    }
    if (this.employee.name==null) {
      alert("Name cannot be null!!")
    }

  }

  onCancel() {
    this.router.navigate(['/employee-dashboard']);
  }
  getAllEmployees(){
    fetch("http://localhost:8080/employee/get-all")
    .then(res=>res.json())
    .then(data=>{
      this.listOfEmployees=data;
  })
}
}
