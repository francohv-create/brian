import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KanbanService {
  columns = signal<any[]>(this.getBoard());

  private getBoard() {
    return JSON.parse(localStorage.getItem('kanban') || '[]');
  }

  addTicket(ticket: any) {
    this.columns.update((cols) =>
      cols.map((col) =>
        col.id === 'create'
          ? {
              ...col,
              tickets: [ticket, ...col.tickets],
            }
          : col,
      ),
    );

    localStorage.setItem('kanban', JSON.stringify(this.columns()));
  }
}
