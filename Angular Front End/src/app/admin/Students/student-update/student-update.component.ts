import { Component } from '@angular/core';

import { ServiceService } from 'src/app/service.service';
import { studenttoupdate } from '../stu';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {

  student=studenttoupdate;

  constructor(private s1:ServiceService){}

  updatedata(updateform: any) {
    const updatedStudentData = {
      rollno: this.student.rollno,
      name: this.student.name,
      course: this.student.course,
      address: this.student.address,
      contact: this.student.contact
    };

    this.s1.studentupdatedata1(updatedStudentData).subscribe(
      (data1) => {
        
        alert("Updated Successful")},

        error=>alert("Not Updated")
      
    );
  }
}
