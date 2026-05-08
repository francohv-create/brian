import { Component, computed, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { KanbanItem } from '../../../models/kanban.interface';

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  sent: { bg: 'rgba(83, 87, 104, 0.1)', color: '#535768' },
  enviado: { bg: 'rgba(83, 87, 104, 0.1)', color: '#535768' },
  'in review': { bg: 'rgba(97, 97, 255, 0.12)', color: '#6161ff' },
  'en revisión': { bg: 'rgba(97, 97, 255, 0.12)', color: '#6161ff' },
  review: { bg: 'rgba(97, 97, 255, 0.12)', color: '#6161ff' },
  accepted: { bg: 'rgba(0, 200, 117, 0.14)', color: '#007a4d' },
  aceptado: { bg: 'rgba(0, 200, 117, 0.14)', color: '#007a4d' },
  rejected: { bg: 'rgba(228, 66, 88, 0.12)', color: '#c0182f' },
  rechazado: { bg: 'rgba(228, 66, 88, 0.12)', color: '#c0182f' },
  iterating: { bg: 'rgba(255, 137, 64, 0.14)', color: '#b85a00' },
  iterando: { bg: 'rgba(255, 137, 64, 0.14)', color: '#b85a00' },
  draft: { bg: 'rgba(148, 80, 253, 0.1)', color: '#7b30e0' },
  borrador: { bg: 'rgba(148, 80, 253, 0.1)', color: '#7b30e0' },
  new: { bg: 'rgba(0, 180, 240, 0.1)', color: '#0070a8' },
  nuevo: { bg: 'rgba(0, 180, 240, 0.1)', color: '#0070a8' },
};

const DEFAULT_COLOR = { bg: 'rgba(97, 97, 255, 0.1)', color: 'var(--violet)' };

@Component({
  selector: 'app-kanban-item',
  template: `
    <div class="kanban-ticket">
      @let ticket = item();
      @let statusColor = statusColorMap();

      <p class="kanban-ticket-title">{{ ticket.title }}</p>

      <p class="kanban-ticket-desc">{{ ticket.description }}</p>

      <div class="kanban-ticket-footer">
        <div
          class="kanban-ticket-status"
          [ngStyle]="{
            background: statusColorMap().bg,
            color: statusColorMap().color
          }"
        >
          <span>{{ status() }}</span>
        </div>
        @if (ticket.client) {
          <div class="kanban-ticket-client">
            {{ ticket.client }}
          </div>
        }
      </div>
    </div>
  `,
  imports: [NgStyle],
  styles: [
    `
      .kanban-ticket {
        background: var(--canvas);
        padding: 16px;
        border-radius: 16px;
        border: 1px solid var(--border);
        cursor: pointer;
        transition:
          transform 0.2s,
          box-shadow 0.2s;
      }

      .kanban-ticket:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
      }

      .kanban-ticket-title {
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: var(--tp);
        margin: 0 0 8px;
        line-height: 1.4;
      }

      .kanban-ticket-desc {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: var(--tm);
        line-height: 1.5;
        margin: 0 0 12px;
      }

      .kanban-ticket-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      }

      .kanban-ticket-status {
        font-family: 'Poppins', sans-serif;
        font-size: 11px;
        font-weight: 600;
        padding: 4px 12px;
        border-radius: 160px;
      }

      .kanban-ticket-client {
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        font-weight: 500;
        color: var(--tm);
        opacity: 0.7;
      }
    `,
  ],
})
export class KanbanItemComponent {
  item = input.required<KanbanItem>();
  status = input<string>('');

  statusColorMap = computed(() => {
    const key = this.status().toLowerCase().trim();
    return STATUS_COLORS[key] || DEFAULT_COLOR;
  });
}
