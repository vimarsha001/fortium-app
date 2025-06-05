export class Employee{
     id: number;
     name: string;
     phone:string;
     email: string;
     department: string;
     createdAt: string;
     updatedAt: string;
     
    constructor(id: number,name: string,phone:string,email: string,department: string,createdAt:string,updatedAt:string){
        this.id=id
        this.name=name
        this.email=email
        this.department=department
        this.phone=phone
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
     
}