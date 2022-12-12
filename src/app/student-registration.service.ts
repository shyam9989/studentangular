import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {


  studentId!:number;

  constructor(private http:HttpClient) { }
 
  public addStudent(student: Student){
       return this.http.post("http://localhost:8080/student/students",student);
  }

  public getStudentDetails(){
    return this.http.get("http://localhost:8080/student/students");
  }
  public deleteStudent(studentId:any){
    console.log("in service"+studentId);
    return this.http.delete("http://localhost:8080/student/students/"+studentId);
  }
  public editStudent(student:Student){
    console.log("In rest",student.studentId);
    return this.http.put("http://localhost:8080/student/students/"+student.studentId,student);
  }

}
