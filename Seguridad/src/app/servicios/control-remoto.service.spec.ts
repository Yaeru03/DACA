import { TestBed, inject } from '@angular/core/testing';

import { ControlRemotoService } from './control-remoto.service';

describe('ControlRemotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlRemotoService]
    });
  });

  it('should be created', inject([ControlRemotoService], (service: ControlRemotoService) => {
    expect(service).toBeTruthy();
  }));
});
