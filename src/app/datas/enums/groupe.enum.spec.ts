import { TestBed, inject } from '@angular/core/testing';
import {GroupeEnumUtilities, GroupeEnum} from './groupe.enum';

describe('Tests de l\'enum GroupeEnumUtilities' , () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('le code de GroupeEnumUtilities.RS est 1', inject([], () => {
    expect(GroupeEnumUtilities.getCode(GroupeEnum.RS)).toBe(1);
  }));

  it('le code de GroupeEnumUtilities.R est 2', inject([], () => {
    expect(GroupeEnumUtilities.getCode(GroupeEnum.R)).toBe(2);
  }));

  it('le code de GroupeEnumUtilities.C est 3', inject([], () => {
    expect(GroupeEnumUtilities.getCode(GroupeEnum.C)).toBe(3);
  }));

  it('le symbol du GroupeEnumUtilities.RS est RS', inject([], () => {
    expect(GroupeEnumUtilities.getSymbole(GroupeEnum.RS)).toBe('RS');
  }));

  it('le symbol du GroupeEnumUtilities.R est R', inject([], () => {
    expect(GroupeEnumUtilities.getSymbole(GroupeEnum.R)).toBe('R');
  }));

  it('le symbol du GroupeEnumUtilities.C est C', inject([], () => {
    expect(GroupeEnumUtilities.getSymbole(GroupeEnum.C)).toBe('C');
  }));

  it('le libelle du GroupeEnumUtilities.RS est Randonneur sportif', inject([], () => {
    expect(GroupeEnumUtilities.getLibelle(GroupeEnum.RS)).toBe('Randonneur sportif');
  }));

  it('le libelle du GroupeEnumUtilities.R est Randonneur', inject([], () => {
    expect(GroupeEnumUtilities.getLibelle(GroupeEnum.R)).toBe('Randonneur');
  }));

  it('le libelle du GroupeEnumUtilities.C est Cyclotouriste', inject([], () => {
    expect(GroupeEnumUtilities.getLibelle(GroupeEnum.C)).toBe('Cyclotouriste');
  }));

  it('le tableau GroupeEnumUtilities.GROUPES_ALL contient tous les groupes', inject([], () => {
    expect(GroupeEnumUtilities.GROUPES_ALL).toContain(GroupeEnum.RS);
    expect(GroupeEnumUtilities.GROUPES_ALL).toContain(GroupeEnum.R);
    expect(GroupeEnumUtilities.GROUPES_ALL).toContain(GroupeEnum.C);
  }));

  it('le tableau GroupeEnumUtilities.GROUPES_R contient les groupes RS et R', inject([], () => {
    expect(GroupeEnumUtilities.GROUPES_R).toContain(GroupeEnum.RS);
    expect(GroupeEnumUtilities.GROUPES_R).toContain(GroupeEnum.R);
  }));

  it('le tableau GroupeEnumUtilities.GROUPES_C contient le groupe C', inject([], () => {
    expect(GroupeEnumUtilities.GROUPES_C).toContain(GroupeEnum.C);
  }));
});
