import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CourseComponent } from '../course/course.component';





@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    CourseComponent
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingModule { }
