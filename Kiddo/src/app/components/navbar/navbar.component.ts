import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('popover') popover: any;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  constructor() {}

  ngOnInit() {}

  showAlert(){
    
  }

  isRotated: boolean = false;

  toggleRotation() {
    this.isRotated = !this.isRotated;
  }
  

}

