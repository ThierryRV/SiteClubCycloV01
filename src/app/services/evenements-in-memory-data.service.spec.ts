import { TestBed, inject } from '@angular/core/testing';

import { EvenementsInMemoryDataService } from './evenements-in-memory-data.service';

fdescribe('EvenementsInMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvenementsInMemoryDataService]
    });
  });

  it('should be created', inject([EvenementsInMemoryDataService], (service: EvenementsInMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
