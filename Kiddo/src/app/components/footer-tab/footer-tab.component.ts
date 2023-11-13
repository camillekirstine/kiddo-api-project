import { Component, OnInit} from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { menuOptions } from '../../constants/MenuOptions';

export const slideMenu = trigger('slideInOut', [
  state('true', style({ opacity: 1 })),
  state('false', style({ opacity: 0, display: 'none' })),
  transition('false <=> true', [animate(500)]),
]);

export const animateIcon = trigger('iconRotate', [
  state('true', style({ transform: 'rotate(90deg)' })),
  state('false', style({ transform: 'rotate(0deg)' })),
  transition('false <=> true', [animate(500)]),
]);

@Component({
  selector: 'app-footer-tab',
  templateUrl: './footer-tab.component.html',
  styleUrls: ['./footer-tab.component.scss'],
  animations: [slideMenu, animateIcon],
})
export class FooterTabComponent implements OnInit {
  menuOptions = menuOptions;
  menuOpen: boolean = false;
  showSubMenu: boolean = false;

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }

  toggleSubMenu(event: Event) {
    event.stopPropagation();
    this.showSubMenu = !this.showSubMenu;
  }

  handleClickOutside() {
    this.menuOpen = false;
  }

  isArray(value: any): boolean{
    return Array.isArray(value);
  }

  constructor() {}

  ngOnInit() {}
}
