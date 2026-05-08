import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ModalComponent } from '../../../components/board/components/modal/modal.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [RouterLink, RouterLinkActive, CommonModule, ModalComponent],
})
export class HeaderModule {}
