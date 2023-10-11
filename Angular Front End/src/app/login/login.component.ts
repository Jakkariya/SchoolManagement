import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });
  constructor(private router:Router,private s1:ServiceService,private fb:FormBuilder){}
/*
  login(){
    let user=this.authService.login(
      this.form.value.username,
      this.form.value.password
      );

    if(!user){
      alert('Invalid username or password')
    }
    else{
      alert('login successful'),
      this.router.navigateByUrl('/admin');
    }
  }
  */


  user :User = new User();
       
  ngOnInit(): void {
  }
    link:string="";
  logindata()
  {
     this.s1.logindata1(this.user).subscribe( data=>
        {alert("Login Successful"),
      
        this.router.navigateByUrl('/admin');}, 
      error=>alert("invalid id/pswd")
      );
  }
  }

