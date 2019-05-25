import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaPVictimaComponent } from './guia-pvictima.component';

describe('GuiaPVictimaComponent', () => {
  let component: GuiaPVictimaComponent;
  let fixture: ComponentFixture<GuiaPVictimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiaPVictimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaPVictimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
