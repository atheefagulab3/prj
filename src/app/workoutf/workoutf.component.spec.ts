import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutfComponent } from './workoutf.component';

describe('WorkoutfComponent', () => {
  let component: WorkoutfComponent;
  let fixture: ComponentFixture<WorkoutfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutfComponent]
    });
    fixture = TestBed.createComponent(WorkoutfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
