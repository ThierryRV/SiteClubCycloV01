import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Evenement } from '../datas/models/evenement';
import { environment } from '../../environments/environment';
import { EvenementEnum } from '../datas/enums/evenement.enum';
import '../rxjs-extensions';

@Injectable()
export class EvenementsService {
  constructor(private http: HttpClient) {}

  list(): Observable<Array<Evenement>> {
    return this.http.get<Array<Evenement>>(`${environment.baseUrl}/api/evenements`);
  }

    search(term: string): Observable<Array<Evenement>> {
      return this.http
        .get(`app/evenements/?_id=${term}`)
        .map(data => {
          console.log('Response: ' + data);
          console.log('JSON: ' + data);
          return data as Array<Evenement>;
        });
    }
}
