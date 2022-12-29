import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnainComponent } from './tnain.component';

describe('TnainComponent', () => {
  let component: TnainComponent;
  let fixture: ComponentFixture<TnainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TnainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TnainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
