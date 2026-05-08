import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { AnalizeComponent } from './analize.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [AnalizeComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    ProgressBarModule,
    NgxJsonViewerModule,
  ],
  exports: [AnalizeComponent],
})
export class AnalizeModule {}
