import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/EmployeeService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  employee: Employee = {
      name: '',
      email: '',
      phone: '',
      department: '',
      updatedAt:'',
      createdAt:''
    };
  constructor(private employeeService : EmployeeService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(id);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.employee = data;
    },
    error: (err) => console.error('Error fetching employee:', err),
  });

  }

}
