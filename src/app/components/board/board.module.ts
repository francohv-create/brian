import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { KanbanColumnComponent } from './components/kanban-column.component';
import { KanbanItemComponent } from './components/kanban-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderBoardComponent } from './components/header-board/header-board.component';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    CdkDrag,
    DragDropModule,
    KanbanItemComponent,
    KanbanColumnComponent,
    HttpClientModule,
    HeaderBoardComponent
  ],
  exports: [BoardComponent],
})
export class BoardModule {}
