import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentviewComponent } from '../Payments/paymentview/paymentview.component';


import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { StudentViewComponent } from './Students/student-view/student-view.component';

import { StudentUpdateComponent } from './Students/student-update/student-update.component';
import { StudentInsertComponent } from './Students/student-insert/student-insert.component';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { TeacerinsertComponent } from './teacerinsert/teacerinsert.component';
import { RequestComponent } from '../request/request.component';

const routes: Routes = [
  {path:'',component:AdminComponent,
children: [{path:'', redirectTo:'dashboard',pathMatch:'full'},

{path:'dashboard', component:DashboardComponent},


{path:'request', component:RequestComponent},
{path:'studentview', component:StudentViewComponent},
{path:'studentinsert', component:StudentInsertComponent},
{path:'studentupdate/:rollno', component:StudentUpdateComponent},
{path:'teacherview', component:TeacherviewComponent},
{path:'teacherinsert',component:TeacerinsertComponent},
{path:'paymentview', component:PaymentviewComponent}]  
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
