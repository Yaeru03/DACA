import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaObservadoresComponent } from './guia-observadores.component';

describe('GuiaObservadoresComponent', () => {
  let component: GuiaObservadoresComponent;
  let fixture: ComponentFixture<GuiaObservadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaObservadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaObservadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
