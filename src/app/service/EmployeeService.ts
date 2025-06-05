import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { catchError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  

  addEmployee(employee: Employee): Observable<Employee> {
    const url = 'http://localhost:8080/employee/add';
    return this.http.post<Employee>(url, employee, this.httpOptions);
  }
  deleteEmployee(id: number): Observable<unknown> {
    const url = `http://localhost:8080/employee/delete/${id}`;
    return this.http.delete(url, this.httpOptions)
  }
  getEmployeeById(id: number): Observable<Employee> {
    const baseUrl = `http://localhost:8080/employee/search`;
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }
  updateEmployee(id: number,employee:Employee){
    const baseUrl = `http://localhost:8080/employee/update`;
    return this.http.patch<Employee>(`${baseUrl}/${id}`,employee);
  }

  
}
