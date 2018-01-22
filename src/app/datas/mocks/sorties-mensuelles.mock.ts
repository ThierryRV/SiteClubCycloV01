import { SortieModel } from '../models/sortie.model';
import {GroupeEnum} from '../enums/groupe.enum';

export const SORTIES_MENSUELLES: SortieModel[] = [
  {
    '_id': 'SOR-2017-11-001',
    'date_sortie': '2017-11-01 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '36 A',
    'distance': 71,
    'denivele': null,
    'direction': 'Sud : Villeconin',
    'commentaire': 'Possibilité de couper à St Fiacre',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'SOR-2017-11-002',
    'date_sortie': '2017-11-05 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '38 B',
    'distance': 72,
    'denivele': null,
    'direction': 'Sud/Ouest : Bouville',
    'commentaire': 'Possibilité de couper à Bouville ',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'SOR-2017-11-003',
    'date_sortie': '2017-11-11 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '33 A',
    'distance': 70,
    'denivele': null,
    'direction': 'Sud/Ouest : Prunay',
    'commentaire': 'Possibilité de couper à Gironville',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'SOR-2017-11-004',
    'date_sortie': '2017-11-12 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '40 A',
    'distance': 74,
    'denivele': null,
    'direction': 'Sud/Ouest : Barbizon',
    'commentaire': 'Possibilité de couper à Macherin',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'SOR-2017-11-005',
    'date_sortie': '2017-11-19 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '41 A',
    'distance': 74,
    'denivele': null,
    'direction': 'Sud/Ouest : Puiselet le Marais',
    'commentaire': 'Possibilité de couper à St Fiacre ',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  },
  {
    '_id': 'SOR-2017-11-006',
    'date_sortie': '2017-11-26 09:00:00',
    'groupes': [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C],
    'circuit': '42 A',
    'distance': 75,
    'denivele': null,
    'direction': 'Sud : Prunay sur Essonne',
    'commentaire': ' Possibilité de couper à Maisse',
    'cree_le': '2017-11-01 00:00:00',
    'maj_le': '2017-11-01 00:00:00'
  }

];
