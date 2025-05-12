export class Employee{
     name: string;
     email: string;
     department: string;
     phone:string;
     createdAt: string;
     updatedAt: string;
     
    constructor(name: string,email: string,department: string,phone:string,createdAt:string,updatedAt:string){
        this.name=name;
        this.email=email
        this.department=department
        this.phone=phone
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
     
}