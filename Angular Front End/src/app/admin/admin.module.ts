import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { StudentViewComponent } from './Students/student-view/student-view.component';
import { StudentInsertComponent } from './Students/student-insert/student-insert.component';
import { StudentUpdateComponent } from './Students/student-update/student-update.component';
import { FiltersPipe } from './Pipes/filters.pipe';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { TeacherupdateComponent } from './teacherupdate/teacherupdate.component';
import { TeacerinsertComponent } from './teacerinsert/teacerinsert.component';
import { RequestacceptComponent } from '../requestaccept/requestaccept.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    StudentViewComponent,
    StudentInsertComponent,
    StudentUpdateComponent,
    
    FiltersPipe,
         TeacherviewComponent,
         TeacherupdateComponent,
         TeacerinsertComponent,
         RequestacceptComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
