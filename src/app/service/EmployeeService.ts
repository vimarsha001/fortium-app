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
  private url = 'http://localhost:8080/customer/add';

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee, this.httpOptions);
  }
  deleteEmployee(id: number): Observable<unknown> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions)
  }
  getAllEmployees(){}
}
