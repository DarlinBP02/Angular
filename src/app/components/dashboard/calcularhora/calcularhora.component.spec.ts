import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularhoraComponent } from './calcularhora.component';

describe('CalcularhoraComponent', () => {
  let component: CalcularhoraComponent;
  let fixture: ComponentFixture<CalcularhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcularhoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
