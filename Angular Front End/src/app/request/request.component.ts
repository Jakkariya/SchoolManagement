import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { studenttoupdate } from '../admin/Students/stu';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  data:any;
  p:number=1;
  itemsPerPage:number=5;
  totalProduct:any;


  constructor(private s1:ServiceService){}

  ngOnInit(): void {
    let res=this.s1.registerviewdata1();
    res.subscribe((data1: any)=>{
      this.data=data1;
      this.totalProduct=data1.length;
    });
  }


 

      studentupdate=studenttoupdate;


      insert(d: { id: string; name: string; course: string; address: string; contact: string; }){
        this.studentupdate.rollno=d.id;
        this.studentupdate.name=d.name;
        this.studentupdate.address=d.address;
        this.studentupdate.course=d.course;
        this.studentupdate.contact=d.contact;
        
    
      }
}
