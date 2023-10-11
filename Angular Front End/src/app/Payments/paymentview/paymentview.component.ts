import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.component.html',
  styleUrls: ['./paymentview.component.css']
})
export class PaymentviewComponent implements OnInit{


  
  data:any;

  constructor(private s1:ServiceService,private router:Router){}

  ngOnInit(): void {
    let res=this.s1.paymentviewdata1();
    res.subscribe((data1: any)=>{
      this.data=data1;
  } );  }



  buttonColor = "black";
  buttonType = "buy";
  isCustomSize = false;
  buttonWidth = 240;
  buttonHeight = 40;
  isTop = window === window.top;

  paymentRequest :google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "VISA", "MASTERCARD"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant"
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US"
    },
    callbackIntents:['PAYMENT_AUTHORIZATION']
  };

  onLoadPaymentData=(event:Event):void=> {
    const eventDetails=event as CustomEvent<google.payments.api.PaymentData>;
    console.log("load payment data", eventDetails.detail);
  }
  onPaymentDataAuthorized:google.payments.api.PaymentAuthorizedHandler=(
    paymentData
  )=>{
    console.log('payment authorized',paymentData);
    return{
      transactionState:'SUCCESS'
    };
  }

 
}
