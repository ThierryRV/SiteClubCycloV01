import { Component, Input, OnInit } from '@angular/core';
import { MenuMainModel } from '../../../datas/models/menu.main.model';

@Component({
  selector: 'ccc-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {

  @Input() main: MenuMainModel;

  constructor() { }

  ngOnInit() {
  }

}
