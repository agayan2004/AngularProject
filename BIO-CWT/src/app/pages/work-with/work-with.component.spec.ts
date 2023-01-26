import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithComponent } from './work-with.component';

describe('WorkWithComponent', () => {
  let component: WorkWithComponent;
  let fixture: ComponentFixture<WorkWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
