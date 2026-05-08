import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { SpinnerModule } from '../../common/spinner/spinner.module';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule,SpinnerModule],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
