import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutwidComponent } from './workoutwid.component';

describe('WorkoutwidComponent', () => {
  let component: WorkoutwidComponent;
  let fixture: ComponentFixture<WorkoutwidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutwidComponent]
    });
    fixture = TestBed.createComponent(WorkoutwidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
