import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/EmployeeService';
import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    department: '',
    updatedAt: '',
    createdAt: '',
  };
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee.id = id;
    console.log(id);
    this.employeeService.getEmployeeById(id).subscribe({
      next: (data) => {
        this.employee = data;
      },
      error: (err) => console.error('Error fetching employee:', err),
    });
  }

  onCancel() {
    this.router.navigate(['/employee-dashboard']);
  }

  onUpdate(
    id: number,
    name: string,
    email: string,
    phone: string,
    department: string
  ) {
    const now: Date = new Date();
    const localTime: string = formatDate(now, 'HH:mm:ss', 'en-US');
    this.employee.name = name;
    this.employee.email = email;
    this.employee.phone = phone;
    this.employee.department = department;
    this.employee.updatedAt = localTime;
    console.log(this.employee);
    this.employeeService.updateEmployee(id, this.employee).subscribe({
  next: (res) => {
    alert('Successfully updated!');
    this.router.navigate(['/employee-dashboard']);
  },
  error: (err) => {
    alert('Update failed: ' + err.message);
  },
});
  }
}
