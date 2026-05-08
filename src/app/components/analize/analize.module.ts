import { CdkDragPlaceholder } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { DownloadProposalComponent } from '../download-proposal/download-proposal.component';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { AnalizeComponent } from './analize.component';

@NgModule({
  declarations: [AnalizeComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    ProgressBarModule,
    NgxJsonViewerModule,
    CdkDragPlaceholder,
    DownloadProposalComponent,
  ],
  exports: [AnalizeComponent],
})
export class AnalizeModule {}
