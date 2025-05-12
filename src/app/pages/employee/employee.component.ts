import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent{
  @Input()
  public item:any;
  constructor(private router: Router) {}

  onDelete(id : number){
    this.router.navigate(['/delete-employee',id]);
  }
  onUpdate(id : number){
    this.router.navigate(['/update-employee',id]);
  }

}
