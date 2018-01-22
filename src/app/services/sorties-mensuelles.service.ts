// ng g service services/sorties-mensuelles
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SortieModel } from '../datas/models/sortie.model';
import { environment } from '../../environments/environment';

@Injectable()
export class SortiesMensuellesService {
  constructor(private http: HttpClient) {}

  list(): Observable<Array<SortieModel>> {
    console.log('SortiesMensullesService.list()');
    return this.http.get<Array<SortieModel>>(`${environment.baseUrl}/api/sorties`);
  }
}
