import { Routes } from '@angular/router';
import { AnalizeComponent } from './components/analize/analize.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'report',
    component: AnalizeComponent,
  },
  {
    path: 'template',
    component: TemplateComponent,
  },
];
