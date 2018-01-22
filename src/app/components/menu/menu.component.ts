import { Component, OnInit } from '@angular/core';
import { MenuMainModel } from '../../datas/models/menu.main.model';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'ccc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Array<MenuMainModel>;

  constructor(private menusService: MenusService) { }

  ngOnInit() {
    this.menusService.list().subscribe(datas => {
      console.log(datas);
      this.menus = datas;
    });
  }

}





