import { Component, EventEmitter, Input, Output } from '@angular/core';
import { template1, template2, template3 } from '../temaplates';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() template: any;

  @Output() close = new EventEmitter<void>();

  getTemplate() {
    if (this.template === 1) {
      return template1;
    } else if (this.template === 2) {
      return template2;
    } else if (this.template === 3) {
      return template3;
    }

    return null;
  }
}
