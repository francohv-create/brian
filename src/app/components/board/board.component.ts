import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of, tap } from 'rxjs';
import { KanbanColumn, KanbanItem } from '../../models/kanban.interface';
import { KanbanService } from '../../services/kanban.service';

@Component({
  selector: 'brian-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent {
  #http = inject(HttpClient);

  columns = toSignal(
    this.#http.get<KanbanColumn[]>('./data.json').pipe(
      tap((data) => {
        const saved = localStorage.getItem('kanban');
        if (!saved || saved === '[]') {
          localStorage.setItem('kanban', JSON.stringify(data));
        }
      }),
    ),
    { initialValue: [] as KanbanColumn[] },
  );

  constructor(public kanbanService: KanbanService) {}

  save(columns: KanbanColumn[]) {
    localStorage.setItem('kanban', JSON.stringify(columns));
  }

  listDrop(event: CdkDragDrop<KanbanColumn[]>) {
    const cols = [...(this.columns() ?? [])];
    console.log(cols)
    moveItemInArray(cols, event.previousIndex, event.currentIndex);

    this.save(cols);
  }

  drop(event: CdkDragDrop<KanbanItem[]>) {
    const cols = [...(this.columns() ?? [])];

    const { previousIndex, currentIndex, container, previousContainer } = event;

    if (container === previousContainer) {
      moveItemInArray(container.data, previousIndex, currentIndex);
    } else {
      transferArrayItem(
        previousContainer.data,
        container.data,
        previousIndex,
        currentIndex,
      );
    }

    this.save(cols);
  }
}
