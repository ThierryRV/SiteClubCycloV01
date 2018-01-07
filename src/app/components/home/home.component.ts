import { Component, OnInit } from '@angular/core';
import {EvenementsService} from '../../services/evenements.service';
import { Observable } from 'rxjs/Observable';
import {Evenement} from '../../datas/models/evenement';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private searchTerms = new Subject();
  evenements: Array<Evenement>;

  constructor(private evenementsService: EvenementsService) { }

  // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.evenementsService.list().subscribe(datas => {
      console.log(datas);
      this.evenements = datas;
    });
  }


/*
  ngOnInitBis(): void {
    console.log(this.searchTerms);
    this.evenements = this.searchTerms
    // attendre 300 ms de pause entre chaque rtequête
      .debounceTime(300)
      // ignorer la recherche en cours si c'est la même que la précédente
      .distinctUntilChanged()
      .switchMap((term: string) => {
          return term ? this.evenementsService.search(term) : Observable.of([]);
        }
      )
      .catch((error: any) => {
        console.log(error);
        // en cas d'erreur, on retourne un résultat vide
        return Observable.of([]);
      });
  }
*/
}
