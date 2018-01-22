import { Component, Input, OnInit} from '@angular/core';
import { MenuItemModel } from '../../../datas/models/menu.item.model';

@Component({
  selector: 'ccc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItemModel;

  constructor() { }

  ngOnInit() {
  }

}
