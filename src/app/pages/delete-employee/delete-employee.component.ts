import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/EmployeeService';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/Employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent implements OnInit{
  
  employee: Employee = {
    name: '',
    email: '',
    phone: '',
    department: '',
    updatedAt:'',
    createdAt:''
  };

  constructor(private employeeService : EmployeeService,private route: ActivatedRoute){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.employee = data;
    },
    error: (err) => console.error('Error fetching employee:', err),
  });
  
}
    
    
}
   

