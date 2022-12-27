import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHorasComponent } from './registrar-horas.component';

describe('RegistrarHorasComponent', () => {
  let component: RegistrarHorasComponent;
  let fixture: ComponentFixture<RegistrarHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
