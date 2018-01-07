export enum GroupeEnum {
  RS = '1-RC',
  R = '2-R',
  C = '3-C'
};

class GroupeEnumItem {
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

const GroupeEnumItems = {
  '1-RC': new GroupeEnumItem(1, 'RS', 'Randonneur sportif'),
  '2-R': new GroupeEnumItem(2, 'R', 'Randonneur'),
  '3-C': new GroupeEnumItem(3, 'C', 'Cyclotouriste')
};

export class GroupeEnumUtilities {
  static readonly GROUPES_ALL: GroupeEnum[] = [GroupeEnum.RS, GroupeEnum.R, GroupeEnum.C];
  static readonly GROUPES_R: GroupeEnum[] = [GroupeEnum.RS, GroupeEnum.R];
  static readonly GROUPES_C: GroupeEnum[] = [GroupeEnum.C];

  static getCode(groupe: GroupeEnum): number {
    return GroupeEnumItems[groupe].code;
  }

  static getSymbole(groupe: GroupeEnum): string {
    return GroupeEnumItems[groupe].symbole;
  }

  static getLibelle(groupe: GroupeEnum): string {
    return GroupeEnumItems[groupe].libelle;
  }
}
