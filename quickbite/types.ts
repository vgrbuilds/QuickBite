
export interface Coordinates {
  lat: number;
  lon: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Canteen {
  id: string;
  name: string;
  location: Coordinates;
  menu: MenuItem[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface Order {
  canteenId: string;
  items: CartItem[];
  total: number;
  orderTime: Date;
}

export enum AppView {
  FINDER,
  MENU,
  CONFIRMATION,
}
