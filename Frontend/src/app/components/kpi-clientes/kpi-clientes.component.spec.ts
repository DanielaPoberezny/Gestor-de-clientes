import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiClientesComponent } from './kpi-clientes.component';

describe('KpiClientesComponent', () => {
  let component: KpiClientesComponent;
  let fixture: ComponentFixture<KpiClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
