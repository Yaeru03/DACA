import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaFamPVictimaComponent } from './guia-fam-pvictima.component';

describe('GuiaFamPVictimaComponent', () => {
  let component: GuiaFamPVictimaComponent;
  let fixture: ComponentFixture<GuiaFamPVictimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaFamPVictimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaFamPVictimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
