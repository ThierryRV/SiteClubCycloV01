import { TestBed, inject } from '@angular/core/testing';
import {EvenementEnumUtilities, EvenementEnum} from './evenement.enum';
import {Evenement} from '../models/evenement';

describe('Tests de l\'enum Evenement' , () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('le code de EvenementEnum.SortieClub est 1', inject([], () => {
    expect(EvenementEnumUtilities.getCode(EvenementEnum.SortieClub)).toBe(1);
  }));

  it('le code de EvenementEnum.Randonnee est 2', inject([], () => {
    expect(EvenementEnumUtilities.getCode(EvenementEnum.Randonnee)).toBe(2);
  }));

  it('le code de EvenementEnum.ReunionClub est 3', inject([], () => {
    expect(EvenementEnumUtilities.getCode(EvenementEnum.ReunionClub)).toBe(3);
  }));

  it('le code de EvenementEnum.ReunionCodep est 4', inject([], () => {
    expect(EvenementEnumUtilities.getCode(EvenementEnum.ReunionCodep)).toBe(4);
  }));

  it('le code de EvenementEnum.WeekEndClub est 5', inject([], () => {
    expect(EvenementEnumUtilities.getCode(EvenementEnum.WeekEndClub)).toBe(5);
  }));

  it('le symbol du EvenementEnum.SortieClub est SortieClub', inject([], () => {
    expect(EvenementEnumUtilities.getSymbole(EvenementEnum.SortieClub)).toBe('SortieClub');
  }));

  it('le symbol du EvenementEnum.Randonnee est Randonnee', inject([], () => {
    expect(EvenementEnumUtilities.getSymbole(EvenementEnum.Randonnee)).toBe('Randonnee');
  }));

  it('le symbol du EvenementEnum.ReunionClub est ReunionClub', inject([], () => {
    expect(EvenementEnumUtilities.getSymbole(EvenementEnum.ReunionClub)).toBe('ReunionClub');
  }));

  it('le symbol du EvenementEnum.ReunionCodep est ReunionCodep', inject([], () => {
    expect(EvenementEnumUtilities.getSymbole(EvenementEnum.ReunionCodep)).toBe('ReunionCodep');
  }));

  it('le symbol du EvenementEnum.WeekEndClub est WeekEndClub', inject([], () => {
    expect(EvenementEnumUtilities.getSymbole(EvenementEnum.WeekEndClub)).toBe('WeekEndClub');
  }));

  it('le libelle du EvenementEnum.SortieClub est Sortie Club', inject([], () => {
    expect(EvenementEnumUtilities.getLibelle(EvenementEnum.SortieClub)).toBe('Sortie Club');
  }));

  it('le libelle du EvenementEnum.Randonnee est Randonnée', inject([], () => {
    expect(EvenementEnumUtilities.getLibelle(EvenementEnum.Randonnee)).toBe('Randonnée');
  }));

  it('le libelle du EvenementEnum.ReunionClub est Réunion Club', inject([], () => {
    expect(EvenementEnumUtilities.getLibelle(EvenementEnum.ReunionClub)).toBe('Réunion Club');
  }));

  it('le libelle du EvenementEnum.ReunionCodep est Réunion Codep', inject([], () => {
    expect(EvenementEnumUtilities.getLibelle(EvenementEnum.ReunionCodep)).toBe('Réunion Codep');
  }));

  it('le libelle du EvenementEnum.WeekEndClub est Week-End Club', inject([], () => {
    expect(EvenementEnumUtilities.getLibelle(EvenementEnum.WeekEndClub)).toBe('Week-End Club');
  }));
});
