import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { StudentRegistrationService } from './student-registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
  students:any
  constructor(private service:StudentRegistrationService,private dialog:MatDialog){
    this.getAllStudent();
  }

  getAllStudent(){
    let resp=this.service.getStudentDetails();
    resp.subscribe((data) =>this.students=data);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
    width : '50%'
    }).afterClosed().subscribe(
 val=>{
  
    this.getAllStudent();
  
 }

    )

}

public editProduct(student:any){
  this.dialog.open(DialogComponent, {
    width : '50%',
    data: {
      studentId: student.studentId,
      studentName: student.studentName,
      fatherName: student.fatherName,
      studentClass: student.studentClass,
      studentAddress: student.studentAddress,
      studentMobile: student.studentMobile
    },
    }).afterClosed().subscribe(
      val=>{
       
         this.getAllStudent();
       
      }
     
         )
}


public deleteStudents(studentId:number){
  console.log(studentId);
  let resp=this.service.deleteStudent(studentId);
  resp.subscribe((data) =>this.students=data);
}

}