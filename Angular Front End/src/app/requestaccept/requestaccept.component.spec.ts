import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestacceptComponent } from './requestaccept.component';

describe('RequestacceptComponent', () => {
  let component: RequestacceptComponent;
  let fixture: ComponentFixture<RequestacceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestacceptComponent]
    });
    fixture = TestBed.createComponent(RequestacceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
