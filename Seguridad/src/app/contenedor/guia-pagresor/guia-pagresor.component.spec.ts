import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaPAgresorComponent } from './guia-pagresor.component';

describe('GuiaPAgresorComponent', () => {
  let component: GuiaPAgresorComponent;
  let fixture: ComponentFixture<GuiaPAgresorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaPAgresorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaPAgresorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
