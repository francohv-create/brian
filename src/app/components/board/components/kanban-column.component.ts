import { CdkDragHandle } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kanban-column',
  template: `
    <div class="kanban-col-inner">
      <div class="kanban-col-header">
        <button class="drag-handle" cdkDragHandle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </button>

        <ng-content select="h2" />
      </div>

      <div class="kanban-col-items">
        <ng-content />
      </div>
    </div>
  `,
  styles: [
    `
      .kanban-col-inner {
        background: var(--glass);
        backdrop-filter: blur(14px);
        padding: 20px;
        border-radius: 22px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-sm);
        min-height: 200px;
      }

      .kanban-col-header {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .drag-handle {
        cursor: grab;
        background: none;
        border: none;
        padding: 4px;
        color: var(--tm);
        opacity: 0.5;
        transition: opacity 0.2s;
      }

      .drag-handle:hover {
        opacity: 1;
        color: var(--violet);
      }

      .kanban-col-items {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    `,
  ],
  imports: [CdkDragHandle],
})
export class KanbanColumnComponent {}
