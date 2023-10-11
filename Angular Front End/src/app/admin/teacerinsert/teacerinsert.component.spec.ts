import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacerinsertComponent } from './teacerinsert.component';

describe('TeacerinsertComponent', () => {
  let component: TeacerinsertComponent;
  let fixture: ComponentFixture<TeacerinsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacerinsertComponent]
    });
    fixture = TestBed.createComponent(TeacerinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
