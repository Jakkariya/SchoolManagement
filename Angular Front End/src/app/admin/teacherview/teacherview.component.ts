import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/service.service';
import { teachertoupdate } from '../teach';

@Component({
  selector: 'app-teacherview',
  templateUrl: './teacherview.component.html',
  styleUrls: ['./teacherview.component.css']
})
export class TeacherviewComponent  implements OnInit{

  constructor(private s1:ServiceService, private router:Router){}

  data:any;
  p:number=1;
  itemsPerPage:number=5;
  totalProduct:any;
  searchText:any;


  ngOnInit(): void {
    let res=this.s1.teacherviewdata1();
    res.subscribe((data1: any)=>{
      this.data=data1;
      this.totalProduct=data1.length;
    });
  }


  deleteItem(id: number) {
    const data = { id:id }; // Create an object with the rollno property
  
    return this.s1.teacherdeletedata1(data).subscribe(
      (resp) => {
        console.log(resp);
        // Optionally, you can update your data array to remove the deleted item here
        this.data = this.data.filters((item: any) => item.id !== id); 
        alert("Deleted Successfully")},

        error=>alert("Not Deleted")
    );
      }

      teacherupdate=teachertoupdate;


  updateItem(d: { id: string; name: string; roll: string; salary: string; contact: string; } ){
    this.teacherupdate.id=d.id;
    this.teacherupdate.name=d.name;
    this.teacherupdate.roll=d.roll;
    this.teacherupdate.salary=d.salary;
    this.teacherupdate.contact=d.contact;
    
  }


}
