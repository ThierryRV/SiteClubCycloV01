import { TestBed, inject } from '@angular/core/testing';

import { DatabaseInMemoryDbService } from './database-in-memory-data.service';

fdescribe('DatabaseInMemoryDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseInMemoryDbService]
    });
  });

  it('should be created', inject([DatabaseInMemoryDbService], (service: DatabaseInMemoryDbService) => {
    expect(service).toBeTruthy();
  }));
});
