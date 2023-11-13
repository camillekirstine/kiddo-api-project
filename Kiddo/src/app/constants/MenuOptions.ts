import { MenuOptions } from '../types/menuOptions';

export const menuOptions: MenuOptions[] = [
  {
    text: 'ALLE AKTIVITETER',
    route: '/',
    icon: 'caret-down-sharp',
    subMenu: [
      { text: 'Kreativt', route: ['/all-activities', {category: 'Kreativt'}] },
      { text: 'Legeaftale', route: ['/all-activities', {category: 'Legeaftale'}] },
      { text: 'Gaming', route: ['/all-activities', {category: 'Gaming'}] },
      { text: 'Udendørs', route: ['/all-activities', {category: 'Udendørs'}] },
      { text: 'Sport', route: ['/all-activities', {category: 'Sport'}] },
      { text: 'Se alle', route: '/all-activities' },
    ],
  },
  
  {
    text: 'KONTAKT',
    route: '/contact',
  },
  {
    text: 'OM OS',
    route: '/about',
  },

];
