import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaFamPAgresorComponent } from './guia-fam-pagresor.component';

describe('GuiaFamPAgresorComponent', () => {
  let component: GuiaFamPAgresorComponent;
  let fixture: ComponentFixture<GuiaFamPAgresorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaFamPAgresorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaFamPAgresorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
