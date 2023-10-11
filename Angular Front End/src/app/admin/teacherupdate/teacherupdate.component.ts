import { Component } from '@angular/core';

import { ServiceService } from 'src/app/service.service';
import { teachertoupdate } from '../teach';

@Component({
  selector: 'app-teacherupdate',
  templateUrl: './teacherupdate.component.html',
  styleUrls: ['./teacherupdate.component.css']
})
export class TeacherupdateComponent {

   
 teacher=teachertoupdate;

 constructor(private s1:ServiceService){}

 updatedata(updateform: any) {
   const updatedTeacherData = {
     id: this.teacher.id,
     name: this.teacher.name,
     roll: this.teacher.roll,
     
     contact: this.teacher.contact,
     salary: this.teacher.salary
   };

   this.s1.teacherupdatedata1(updatedTeacherData).subscribe(
     (data) => {
       
       alert("Updated Successful")},

       error=>alert("Not Updated")
     
   );
 }
}
