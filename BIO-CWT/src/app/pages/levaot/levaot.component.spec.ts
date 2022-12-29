import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevaotComponent } from './levaot.component';

describe('LevaotComponent', () => {
  let component: LevaotComponent;
  let fixture: ComponentFixture<LevaotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevaotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevaotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
