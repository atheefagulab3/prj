import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutiComponent } from './workouti.component';

describe('WorkoutiComponent', () => {
  let component: WorkoutiComponent;
  let fixture: ComponentFixture<WorkoutiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutiComponent]
    });
    fixture = TestBed.createComponent(WorkoutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
