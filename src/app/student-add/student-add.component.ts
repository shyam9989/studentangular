import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  student : Student=new Student(0,"","","","",0);
  message! : any;

  constructor(private service:StudentRegistrationService){}

  public registerNow(){
    let resp=this.service.addStudent(this.student);
    resp.subscribe((data) =>this.message=data);
  }

}
