// ng g service services/sorties-mensuelles-in-memory-data
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EVENEMENTS } from '../datas/mocks/evenements.mock';

@Injectable()
export class EvenementsInMemoryDataService implements InMemoryDbService {
  createDb() {
    const evenements = EVENEMENTS;
    return { evenements };
  }
}
