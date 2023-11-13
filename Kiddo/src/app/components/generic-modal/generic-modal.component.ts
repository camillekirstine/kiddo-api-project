import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent {
  @Input() modalTitle: string = '';
  @Input() buttonText: string = '';
  @Input() showButton: boolean = true;
  @Input() modalBackgroundColor: string = 'primary'
  @Output() applyAction = new EventEmitter<void>();
  @Output() closeAction = new EventEmitter<void>();

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  apply() {
    this.applyAction.emit();
  }

  close() {
    this.closeAction.emit();
  }
}