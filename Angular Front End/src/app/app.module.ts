import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentviewComponent } from './Payments/paymentview/paymentview.component';
import { PaymentinsertComponent } from './Payments/paymentinsert/paymentinsert.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';




@NgModule({
  declarations: [
    AppComponent,
    PaymentviewComponent,
    PaymentinsertComponent,
    FilterPipe,
    LoginComponent,
    AboutComponent,
    RegisterComponent,
    RequestComponent,
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    GooglePayButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
