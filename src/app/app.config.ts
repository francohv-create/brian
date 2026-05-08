import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HomeModule } from './components/home/home.module';
import { BoardModule } from './components/board/board.module';
import { AnalizeModule } from './components/analize/analize.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HomeModule, BoardModule, AnalizeModule),
  ],
};
