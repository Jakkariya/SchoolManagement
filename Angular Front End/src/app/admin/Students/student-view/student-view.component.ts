import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { studenttoupdate } from '../stu';
import { StudentInsertComponent } from '../student-insert/student-insert.component';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{

  
  p:number=1;
  itemsPerPage:number=8;
  totalProduct:any;

  searchText:any;
  
  data:any;
  
  constructor(private s1:ServiceService,private router:Router){}

  ngOnInit(): void {
    let res=this.s1.studentview1();
    res.subscribe((data1: any)=>{
      this.data=data1;
      this.totalProduct=data1.length;
    }
      
      );


  }

  deleteItem(rollno: number) {
    const data = { rollno: rollno }; // Create an object with the rollno property
  
    return this.s1.studentdeletedata1(data).subscribe(
      (resp) => {
        console.log(resp);
        // Optionally, you can update your data array to remove the deleted item here
        this.data = this.data.filter((item: any) => item.rollno !== rollno); 
        alert("Deleted Successful")},

        error=>alert("Not Deleted")
    );

  
  }

  
 
 
  studentupdate=studenttoupdate;


  updateItem(d: { rollno: string; name: string; course: string; address: string; contact: string; }){
    this.studentupdate.rollno=d.rollno;
    this.studentupdate.name=d.name;
    this.studentupdate.address=d.address;
    this.studentupdate.course=d.course;
    this.studentupdate.contact=d.contact;
    

  }


  

  
}
