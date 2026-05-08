import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { KanbanColumn } from '../../../../models/kanban.interface';

@Component({
  selector: 'app-header-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-board.component.html',
  styleUrl: './header-board.component.scss',
})
export class HeaderBoardComponent {
  @Input() columns: KanbanColumn[] = [];

  get stats() {
    const cols = this.columns ?? [];
    const get = (id: string) =>
      cols.find((c) => c.id === id)?.tickets.length ?? 0;

    const total = cols.reduce(
      (acc, col) => acc + (col.tickets?.length ?? 0),
      0,
    );

    return [
      { label: 'TOTAL', value: total, color: 'text-gray-400' },
      { label: 'ENVIADAS', value: get('create'), color: 'text-blue-500' },
      {
        label: 'EVALUACIÓN',
        value: get('in-progress'),
        color: 'text-yellow-500',
      },
      {
        label: 'NEGOCIACIÓN',
        value: get('negotiation'),
        color: 'text-orange-500',
      },
      { label: 'APROBADAS', value: get('approved'), color: 'text-green-500' },
      { label: 'RECHAZADAS', value: get('rejected'), color: 'text-red-500' },
    ];
  }
}
