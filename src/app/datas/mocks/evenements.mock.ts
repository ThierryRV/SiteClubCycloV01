import { Evenement } from '../models/evenement';
import {Time} from '@angular/common';
import {EvenementEnum} from '../enums/evenement.enum';

export const EVENEMENTS: Evenement[] = [
  {
    '_id': 'EVT-2017-11-001',
    'date_evenement': '2017-11-01 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-001',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'EVT-2017-11-002',
    'date_evenement': '2017-11-05 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-002',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'EVT-2017-11-003',
    'date_evenement': '2017-11-11 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-003',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'EVT-2017-11-004',
    'date_evenement': '2017-11-12 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-004',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'EVT-2017-11-005',
    'date_evenement': '2017-11-19 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-005',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'EVT-2017-11-006',
    'date_evenement': '2017-11-26 09:00:00',
    'type_evenement': EvenementEnum.SortieClub,
    'detail_evenement': 'SOR-2017-11-006',
    'commentaire': '',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  }
];
