import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './pages/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './pages/update-employee/update-employee.component';
import { SearchEmployeeComponent } from './pages/search-employee/search-employee.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';

export const routes: Routes = [
    {
        path : 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path : 'about-us',
        component: AboutUsComponent
    },
    {
        path : 'add-employee',
        component: AddEmployeeComponent
    },
    {
        path : 'delete-employee/:id',
        component: DeleteEmployeeComponent
    },
    {
        path : 'update-employee/:id',
        component: UpdateEmployeeComponent
    },
    {
        path : 'search-employee',
        component: SearchEmployeeComponent
    },
    {
        path : 'employee-dashboard',
        component: EmployeeDashboardComponent
    }

];
