import { TestBed, inject } from '@angular/core/testing';

import { SortiesMensuellesInMemoryDataService } from './sorties-mensuelles-in-memory-data.service';

fdescribe('SortiesMensuellesInMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortiesMensuellesInMemoryDataService]
    });
  });

  it('should be created', inject([SortiesMensuellesInMemoryDataService], (service: SortiesMensuellesInMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
