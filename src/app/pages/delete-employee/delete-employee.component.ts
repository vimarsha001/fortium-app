import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/EmployeeService';
import { ActivatedRoute, Router } from '@angular/router';
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
    id:0,
    name: '',
    email: '',
    phone: '',
    department: '',
    updatedAt:'',
    createdAt:''
  };

  constructor(private employeeService : EmployeeService,private route: ActivatedRoute,private router: Router){}

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

onDelete(id:number){
  this.employeeService.deleteEmployee(id).subscribe({
  next: (res) => {
    alert('Successfully deleted!');
    this.router.navigate(['/employee-dashboard']);
  },
  error: (err) => {
    alert('Delete failed: ' + err.message);
  },
});
  
}
onCancel(){
    this.router.navigate(['/employee-dashboard']);
}
    
    
}
   

