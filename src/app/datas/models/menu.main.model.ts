import { MenuItemModel } from './menu.item.model';

export class MenuMainModel {
  _id: string;
  name: string;
  icone: string;
  order: number;
  items: Array<MenuItemModel>;
}
