import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentinsertComponent } from './paymentinsert.component';

describe('PaymentinsertComponent', () => {
  let component: PaymentinsertComponent;
  let fixture: ComponentFixture<PaymentinsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentinsertComponent]
    });
    fixture = TestBed.createComponent(PaymentinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
