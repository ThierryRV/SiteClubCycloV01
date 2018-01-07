import {Time} from '@angular/common';
import {GroupeEnum} from '../enums/groupe.enum';

export class Sortie {
  _id: string;
  date_sortie: string;
  groupes: Array<GroupeEnum>;
  circuit: string;
  distance: number;
  denivele: number;
  direction: string;
  commentaire: string;
  cree_le: string;
  maj_le: string;
}
