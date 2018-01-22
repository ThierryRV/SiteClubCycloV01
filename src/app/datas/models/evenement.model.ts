import {EvenementEnum} from '../enums/evenement.enum';

export class EvenementModel {
  _id: string;
  date_evenement: string;
  type_evenement: EvenementEnum;
  detail_evenement: string;
  commentaire: string;
  cree_le: string;
  maj_le: string;
}
