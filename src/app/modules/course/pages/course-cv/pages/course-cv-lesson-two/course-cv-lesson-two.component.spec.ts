import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCvLessonTwoComponent } from './course-cv-lesson-two.component';

describe('CourseCvLessonTwoComponent', () => {
  let component: CourseCvLessonTwoComponent;
  let fixture: ComponentFixture<CourseCvLessonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCvLessonTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseCvLessonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
