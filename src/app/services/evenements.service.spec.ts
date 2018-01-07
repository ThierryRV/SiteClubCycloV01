import { TestBed, inject } from '@angular/core/testing';

import { EvenementsService } from './evenements.service';

fdescribe('EvenementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvenementsService]
    });
  });

  it('should be created', inject([EvenementsService], (service: EvenementsService) => {
    expect(service).toBeTruthy();
  }));
});
