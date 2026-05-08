import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { KanbanService } from '../../../../services/kanban.service';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  close = output<void>();

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private kanbanService: KanbanService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      client: ['', Validators.required],
    });
  }
  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const ticket = {
      id: crypto.randomUUID(),
      title: this.form.value.title!,
      description: this.form.value.description!,
      assignee: this.form.value.client!,
      client: this.form.value.client!,
    };

    this.kanbanService.addTicket(ticket);

    this.onClose();
  }
}
