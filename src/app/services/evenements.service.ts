import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EvenementModel } from '../datas/models/evenement.model';
import { environment } from '../../environments/environment';
import '../rxjs-extensions';

@Injectable()
export class EvenementsService {
  constructor(private http: HttpClient) {}

  list(): Observable<Array<EvenementModel>> {
    console.log('EvenementsService.list()');
    return this.http.get<Array<EvenementModel>>(`${environment.baseUrl}/api/evenements`);
  }
}
