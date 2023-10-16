import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeComponent } from './updatee.component';

describe('UpdateeComponent', () => {
  let component: UpdateeComponent;
  let fixture: ComponentFixture<UpdateeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateeComponent]
    });
    fixture = TestBed.createComponent(UpdateeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
