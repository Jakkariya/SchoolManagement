import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-teacerinsert',
  templateUrl: './teacerinsert.component.html',
  styleUrls: ['./teacerinsert.component.css']
})
export class TeacerinsertComponent {

  
  constructor(private s1:ServiceService,private router:Router){}

  insertdata(insertform:any){
    this.s1.teacherinsertdata1(insertform.value).subscribe(
      (data) => {
        this.router.navigate(['teacherview']),
        alert("Inserted Successful")
      },

        error=>alert("Not Inserted")
    );

  }
  back(){

    this.router.navigate(['teacherview']);
  }

}
