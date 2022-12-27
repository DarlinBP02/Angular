import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregistroComponent } from './listregistro.component';

describe('ListregistroComponent', () => {
  let component: ListregistroComponent;
  let fixture: ComponentFixture<ListregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListregistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
