import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-employee-dashboard',
  imports: [RouterModule,CommonModule],
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent implements OnInit{
  listOfEmployees : Employee[] = [];
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    console.log("Calling getAllEmployees");
    fetch("http://localhost:8080/employee/get-all")
      .then(res=>res.json())
      .then(data=>{
      this.listOfEmployees=data;
      console.log("Fetched employees:", data);
      console.log("Current list:", this.listOfEmployees);
    })
  }

  @Input()
  public employee:any;
  
  constructor(private router: Router) {}

  onDelete(id : number){
    this.router.navigate(['/delete-employee',id]);
  }
  onUpdate(id : number){
    this.router.navigate(['/update-employee',id]);
  }
}
  
