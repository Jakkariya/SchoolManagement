import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent {

  constructor(private s1:ServiceService,private router:Router){}

  insertdata(insertform:any){
    this.s1.studentinsertdata1(insertform.value).subscribe(
      (data) => {
        
        alert("Inserted Successful")
      },

        error=>alert("Not Inserted")
    );

  }
  back(){

    this.router.navigate(['studentview']);
  }
}
