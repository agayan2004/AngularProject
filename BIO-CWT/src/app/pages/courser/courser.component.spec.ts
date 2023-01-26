import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserComponent } from './courser.component';

describe('CourserComponent', () => {
  let component: CourserComponent;
  let fixture: ComponentFixture<CourserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
