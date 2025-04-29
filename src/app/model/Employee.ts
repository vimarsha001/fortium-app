export class Employee{
    constructor(id:number,fullName: string,email: string,department: string,phone:string,createdAt:string,updatedAt:string){
        this.id=id;
        this.fullName=fullName;
        this.email=email
        this.department=department
        this.phone=phone
        this.createdAt=createdAt
        this.updatedAt=updatedAt
    }
     id: number;
     fullName: string;
     email: string;
     department: string;
     phone:string;
     createdAt: string;
     updatedAt: string;
}