import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { LandingComponent } from './landing/landing/landing.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./public/public.module').then((m)=>m.PublicModule)},
  {path:'course', component:CourseComponent },
  {path:'landing', component:LandingComponent},
  {path:'about', component:AboutComponent},
  {path:'register', component:RegisterComponent},
  {path:'request', component:RequestComponent},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  
  {path:'login', component:LoginComponent},


  /* {path:'',redirectTo:'login',pathMatch:'full'},
  
  
  {path:'dashboard', component:DashboardComponent},
  {path:'studentview', component:StudentviewComponent},
  {path:'studentinsert', component:StudentinsertComponent},
  {path:'studentupdate/:rollno', component:StudentupdateComponent},
  {path:'teacherview', component:TeacherviewComponent},
  {path:'teacherinsert',component:TeacherinsertComponent},
  {path:'paymentview', component:PaymentviewComponent}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
