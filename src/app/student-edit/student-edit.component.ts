import { Component } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  students:any
  constructor(private service:StudentRegistrationService){

    let resp=this.service.getStudentDetails();
    resp.subscribe((data) =>this.students=data);
  }

  public deleteStudents(studentId:number){
    console.log(studentId);
    let resp=this.service.deleteStudent(studentId);
    resp.subscribe((data) =>this.students=data);
  }

 

}
