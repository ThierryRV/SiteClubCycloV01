export enum EvenementEnum {
  SortieClub = '1-SortieClub',
  Randonnee = '2-Randonnee',
  ReunionClub = '3-ReunionClub',
  ReunionCodep = '4-ReunionCodep',
  WeekEndClub= '5-WeekEndClub'
}

class EvenementEnumItem {
  private _code: number;
  private _symbole: string;
  private _libelle: string;

  constructor(code: number, symbole: string, libelle: string) {
    this._code = code;
    this._symbole = symbole;
    this._libelle = libelle;
  }

  get code(): number {
    return this._code;
  }

  get symbole(): string {
    return this._symbole;
  }

  get libelle(): string {
    return this._libelle;
  }
}

const EvenemenEnumItems = {
  '1-SortieClub': new EvenementEnumItem(1, 'SortieClub', 'SortieModel Club'),
  '2-Randonnee': new EvenementEnumItem(2, 'RandonneeModel', 'Randonnée'),
  '3-ReunionClub': new EvenementEnumItem(3, 'ReunionClub', 'Réunion Club'),
  '4-ReunionCodep': new EvenementEnumItem(4, 'ReunionCodep', 'Réunion Codep'),
  '5-WeekEndClub': new EvenementEnumItem(5, 'WeekEndClub', 'Week-End Club')
};

export class EvenementEnumUtilities {
  static getCode(evenement: EvenementEnum): number {
    return EvenemenEnumItems[evenement].code;
  }

  static getSymbole(evenement: EvenementEnum): string {
    return EvenemenEnumItems[evenement].symbole;
  }

  static getLibelle(evenement: EvenementEnum): string {
    return EvenemenEnumItems[evenement].libelle;
  }
}
