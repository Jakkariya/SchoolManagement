import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  constructor(private fb: FormBuilder, private s1:ServiceService,private router:Router){}

  insertdata(insertform:any){
    this.s1.studentregisterdata1(insertform.value).subscribe(
      (data) => {
        
        alert("Register successfully completed"),
        alert("we will contact to you soon"),
        this.router.navigate(["/landing"]);
      },

        error=>alert("Not Inserted")
    );

    }


  
   
  

    
}

