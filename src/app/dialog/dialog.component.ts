import { Component,Inject, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentRegistrationService } from '../student-registration.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms'
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  implements OnInit{

  //student : Student=new Student(0,"","","","",0);
  student! : any;
  studentForm !: FormGroup;
  actionBtn !: string;
  constructor(private service:StudentRegistrationService,
    private formbuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef: MatDialogRef<DialogComponent>,
    
    ){
      this.actionBtn="save";
    }

  public registerNow1(){
   // let resp=this.service.addStudent(this.student);
   // resp.subscribe((data) =>this.message=data);
  }

  ngOnInit(): void {
   
    this.studentForm= this.formbuilder.group({
      studentId:[""],
      studentName :["",Validators.required],
      fatherName: ["", Validators.required],
      studentClass: ["", Validators.required],
      studentAddress: ["", Validators.required],
      studentMobile: ["", Validators.required],
    })

    console.log("new data for edit",this.editData.studentId);
  if(this.editData){
    this.actionBtn="udpate";
    this.studentForm.controls['studentId'].setValue(this.editData.studentId)
    this.studentForm.controls['studentName'].setValue(this.editData.studentName)
    this.studentForm.controls['fatherName'].setValue(this.editData.fatherName)
    this.studentForm.controls['studentClass'].setValue(this.editData.studentClass)
    this.studentForm.controls['studentAddress'].setValue(this.editData.studentAddress)
    this.studentForm.controls['studentMobile'].setValue(this.editData.studentMobile)
  }
  }

  public addStudent1(){
   
   if(!this.editData){
    if(this.studentForm.valid){
      this.service.addStudent(this.studentForm.value)
      .subscribe({
        next:(data)=>{
          alert("Student added successfully");
          this.studentForm.reset();
          this.dialogRef.close();
        },
        error:()=>{
          alert("student failed to add");
        }
      })
    }
   }else{
    this.service.editStudent(this.studentForm.value)
    .subscribe({
      next:(data) =>{
        alert("Student updated successfully");
        this.studentForm.reset();
        this.dialogRef.close();
      },
      error:()=>{
        alert("update failed");
      }
      
    })
   }
   

  }

  
}
