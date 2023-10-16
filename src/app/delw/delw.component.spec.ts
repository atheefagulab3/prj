import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelwComponent } from './delw.component';

describe('DelwComponent', () => {
  let component: DelwComponent;
  let fixture: ComponentFixture<DelwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelwComponent]
    });
    fixture = TestBed.createComponent(DelwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
