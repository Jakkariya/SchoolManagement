import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherviewComponent } from './teacherview.component';

describe('TeacherviewComponent', () => {
  let component: TeacherviewComponent;
  let fixture: ComponentFixture<TeacherviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherviewComponent]
    });
    fixture = TestBed.createComponent(TeacherviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
