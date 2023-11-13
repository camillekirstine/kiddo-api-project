import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-succes-modal',
  templateUrl: './succes-modal.component.html',
  styleUrls: ['./succes-modal.component.scss'],
})
export class SuccesModalComponent  implements OnInit {
  @Output() closeRequest = new EventEmitter<void>();

  onCloseButtonClick() {
    this.closeRequest.emit(); 
    
  }

  constructor() { }

  ngOnInit() {}

}
