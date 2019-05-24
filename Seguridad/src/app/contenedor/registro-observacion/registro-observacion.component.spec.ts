import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroObservacionComponent } from './registro-observacion.component';

describe('RegistroObservacionComponent', () => {
  let component: RegistroObservacionComponent;
  let fixture: ComponentFixture<RegistroObservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroObservacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
