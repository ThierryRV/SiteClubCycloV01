import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SORTIES_MENSUELLES } from '../datas/mocks/sorties-mensuelles.mock';
import { EVENEMENTS } from '../datas/mocks/evenements.mock';
import { MENUS } from '../datas/mocks/menus.mock';

@Injectable()
export class DatabaseInMemoryDbService implements InMemoryDbService {
  createDb() {
    const evenements = EVENEMENTS;
    const sorties = SORTIES_MENSUELLES;
    const menus = MENUS;

    return { evenements, sorties, menus };
  }
}
