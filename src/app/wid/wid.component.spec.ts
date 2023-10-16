import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidComponent } from './wid.component';

describe('WidComponent', () => {
  let component: WidComponent;
  let fixture: ComponentFixture<WidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidComponent]
    });
    fixture = TestBed.createComponent(WidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
