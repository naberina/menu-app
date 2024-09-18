// src/data.ts
export interface MenuItemType {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }
  
  export const menuItems: MenuItemType[] = [
    { id: 1, name: 'Hot Drink', price: 3.0, imageUrl: '/images/coffee.png' },
    { id: 2, name: 'Cold Drink', price: 4.7, imageUrl: '/images/juice_orange.png'},
    { id: 3, name: 'Beer', price: 10.50, imageUrl: '/images/beer.png' },
    { id: 4, name: 'Churros', price: 4.0, imageUrl: '/images/churros.png' },
  ];
  