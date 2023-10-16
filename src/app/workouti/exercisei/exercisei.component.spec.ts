import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseiComponent } from './exercisei.component';

describe('ExerciseiComponent', () => {
  let component: ExerciseiComponent;
  let fixture: ComponentFixture<ExerciseiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseiComponent]
    });
    fixture = TestBed.createComponent(ExerciseiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
