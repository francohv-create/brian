import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../../common/spinner/footer/footer.module';
import { SpinnerModule } from '../../common/spinner/spinner.module';
import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { CoreComponent } from './core.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
  ],
  providers: [provideHttpClient()],
  exports: [CoreComponent],
})
export class CoreModule {}
