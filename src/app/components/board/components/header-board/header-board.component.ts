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
      { label: 'TOTAL', value: total, color: 'var(--graphite)' },
      { label: 'Created', value: get('create'), color: '#0070a8' },
      {
        label: 'In evaluation',
        value: get('in-progress'),
        color: '#b85a00',
      },
      {
        label: 'Negotiation',
        value: get('negotiation'),
        color: '#6161ff',
      },
      { label: 'Approved', value: get('approved'), color: '#007a4d' },
      { label: 'Rejected', value: get('rejected'), color: '#c0182f' },
    ];
  }
}
