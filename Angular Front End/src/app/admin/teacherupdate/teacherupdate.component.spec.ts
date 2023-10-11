import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherupdateComponent } from './teacherupdate.component';

describe('TeacherupdateComponent', () => {
  let component: TeacherupdateComponent;
  let fixture: ComponentFixture<TeacherupdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherupdateComponent]
    });
    fixture = TestBed.createComponent(TeacherupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
