import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountwComponent } from './countw.component';

describe('CountwComponent', () => {
  let component: CountwComponent;
  let fixture: ComponentFixture<CountwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountwComponent]
    });
    fixture = TestBed.createComponent(CountwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
