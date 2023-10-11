import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


    
  data:any;
  data1:any;

  
  
  constructor(private s1:ServiceService,private router:Router){ }

  
studentview= Router;

  ngOnInit(): void {
    let res=this.s1.totalstudent1();
    res.subscribe((data1)=>this.data=data1);

    let res1=this.s1.totalteacher1();
    res1.subscribe((data1)=>this.data1=data1);
    
  }
  
}
