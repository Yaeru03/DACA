import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIncidenciasComponent } from './reporte-incidencias.component';

describe('ReporteIncidenciasComponent', () => {
  let component: ReporteIncidenciasComponent;
  let fixture: ComponentFixture<ReporteIncidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIncidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIncidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
