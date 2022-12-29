import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaruselComponent } from './karusel.component';

describe('KaruselComponent', () => {
  let component: KaruselComponent;
  let fixture: ComponentFixture<KaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
