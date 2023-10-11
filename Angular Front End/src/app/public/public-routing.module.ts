import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LandingComponent } from '../landing/landing/landing.component';
import { StudentViewComponent } from '../admin/Students/student-view/student-view.component';

const routes: Routes = [
  {path:'',component:PublicComponent,
children:[
  {path:'', component:LandingComponent},
  {path:'studentview', component:StudentViewComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
