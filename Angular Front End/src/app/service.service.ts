import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit{

  link = "http://localhost:9001/login";
  link1="http://localhost:9001/countstudent";
  link2="http://localhost:9001/countteacher";
  link3="http://localhost:9001/studentview";
  link4="http://localhost:9001/studentdelete";
  link5="http://localhost:9001/studentupdate";
  link6="http://localhost:9001/studentoneview";
  link7="http://localhost:9001/studentinsert";
  link8="http://localhost:9001/teacherview";
  link9="http://localhost:9001/teacherinsert";
  link10="http://localhost:9001/teacherdelete";
  link11="http://localhost:9001/teacherupdate";
  link12="http://localhost:9001/register";
  link13="http://localhost:9001/registerview";
  link14="http://localhost:9001/registerdelete"
  link15="http://localhost:9001/paymentview";

  

  constructor(private h1:HttpClient) { }

  ngOnInit(): void {
    
  }

  logindata1(user : User):Observable<object>
  {
       return this.h1.post(`${this.link}`,user);
  }
  
  totalstudent1(){
    return this.h1.get(this.link1);
  }

  totalteacher1(){
    return this.h1.get(this.link2);
  }

  studentview1(){
    return this.h1.get(this.link3);
  }
  
  studentdeletedata1(data:any)
  {
    return this.h1.post(this.link4,data);
  }

  studentinsertdata1(data:any){
    return this.h1.post(this.link7,data);
  }

  studentregisterdata1(data:any){
    
    return this.h1.post(this.link12,data);
  }

  registerviewdata1(){
    return this.h1.get(this.link13);
  }

  registerdeletedata1(data:any)
  {
    return this.h1.post(this.link14,data);
  }


  studentupdatedata1(data:any)
  {
    return this.h1.post(this.link5,data);
  }



  teacherviewdata1(){
    return this.h1.get(this.link8);
  }
  
  teacherdeletedata1(data:any)
  {
    return this.h1.post(this.link10,data);
  }

  teacherinsertdata1(data:any){
    return this.h1.post(this.link9,data);
  }


  teacherupdatedata1(data:any)
  {
    return this.h1.post(this.link11,data);
  }


  paymentviewdata1(){
    return this.h1.get(this.link15);
  }
  

}