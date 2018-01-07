// ng g service services/sorties-mensuelles-in-memory-data
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SORTIES_MENSUELLES } from '../datas/mocks/sorties-mensuelles.mock';

@Injectable()
export class SortiesMensuellesInMemoryDataService implements InMemoryDbService {
  createDb() {
    const sortiesMensuelles = SORTIES_MENSUELLES;
    return { sortiesMensuelles };
  }
}
