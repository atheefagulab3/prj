import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatewComponent } from './updatew.component';

describe('UpdatewComponent', () => {
  let component: UpdatewComponent;
  let fixture: ComponentFixture<UpdatewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatewComponent]
    });
    fixture = TestBed.createComponent(UpdatewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
