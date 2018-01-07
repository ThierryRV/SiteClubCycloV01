import { TestBed, inject } from '@angular/core/testing';

import { SortiesMensuellesService } from './sorties-mensuelles.service';

describe('SortiesMensuellesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortiesMensuellesService]
    });
  });

  it('should be created', inject([SortiesMensuellesService], (service: SortiesMensuellesService) => {
    expect(service).toBeTruthy();
  }));
});
