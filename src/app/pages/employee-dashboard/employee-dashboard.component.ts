import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../../service/EmployeeService';

@Component({
  selector: 'app-employee-dashboard',
  imports: [RouterModule,CommonModule,EmployeeComponent],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent implements OnInit{
  listOfEmployees : any = [];
  ngOnInit(): void {
    this.getAllEmployees();
    console.log(this.listOfEmployees);
  }

  getAllEmployees(){
    fetch("http://localhost:8080/employee/get-all")
    .then(res=>res.json())
    .then(data=>{
      this.listOfEmployees=data;
    })

  }
  
}
  
