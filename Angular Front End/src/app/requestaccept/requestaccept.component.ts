import { Component } from '@angular/core';
import { studenttoupdate } from '../admin/Students/stu';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-requestaccept',
  templateUrl: './requestaccept.component.html',
  styleUrls: ['./requestaccept.component.css']
})
export class RequestacceptComponent {
    student = studenttoupdate;
    updatedStudentData: any;
    data: any;
  
    constructor(private s1: ServiceService) {}
  
    updatedata(updateform: any) {
      this.updatedStudentData = {
        rollno: this.student.rollno,
        name: this.student.name,
        course: this.student.course,
        address: this.student.address,
        contact: this.student.contact
      };
  
      // First, update the student's data
      this.s1.studentinsertdata1(this.updatedStudentData).subscribe(
        (data1) => {
          // After successful update, delete the student
          this.deleteItem(this.updatedStudentData.rollno);
          alert("Updated Successfully");
        },
        (error) => {
          alert("Update Failed");
        }
      );
    }
  
    deleteItem(id: string) {
      const data = { id: id }; // Create an object with the rollno property
  
      this.s1.registerdeletedata1(data).subscribe(
        (resp) => {
          console.log(resp);
          // Optionally, you can update your data array to remove the deleted item here
          this.data = this.data.filter((item: any) => item.id !== id);
          alert("Deleted Successfully");
        },
        (error) => {
          alert("Delete Failed");
        }
      );
    }
  }