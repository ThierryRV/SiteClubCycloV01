import { Component, OnInit } from '@angular/core';
import { EvenementsService } from '../../services/evenements.service';
import { EvenementModel } from '../../datas/models/evenement.model';
import { SortieModel } from '../../datas/models/sortie.model';
import { MenuMainModel } from '../../datas/models/menu.main.model';
import { SortiesMensuellesService } from '../../services/sorties-mensuelles.service';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'ccc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  evenements: Array<EvenementModel>;
  sorties: Array<SortieModel>;
  menus: Array<MenuMainModel>;

  constructor(
    private evenementsService: EvenementsService,
    private sortiesService: SortiesMensuellesService,
    private menusService: MenusService) { }

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
    try {
      this.evenementsService.list().subscribe(datas => {
        console.log(datas);
        this.evenements = datas;
      });
    } catch (e) {
      console.log(e);
      this.evenements = [];
    }

    try {
      this.sortiesService.list().subscribe(datas => {
        console.log(datas);
        this.sorties = datas;
      });
     } catch (e) {
        console.log(e);
       this.sorties = [];
     }

    try {
      this.menusService.list().subscribe(datas => {
        console.log(datas);
        this.menus = datas;
      });
    } catch (e) {
      console.log(e);
      this.menus = [];
    }
  }
}
