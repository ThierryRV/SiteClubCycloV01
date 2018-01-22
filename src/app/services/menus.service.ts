import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import '../rxjs-extensions';
import { MenuMainModel } from '../datas/models/menu.main.model';

@Injectable()
export class MenusService {
  constructor(private http: HttpClient) {}

  list(): Observable<Array<MenuMainModel>> {
    return this.http.get<Array<MenuMainModel>>(`${environment.baseUrl}/api/menus`);
  }
}
