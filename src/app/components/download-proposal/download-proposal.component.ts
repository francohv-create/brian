import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-download-proposal',
  imports: [],
  templateUrl: './download-proposal.component.html',
  styleUrl: './download-proposal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DownloadProposalComponent {
  download(): void {
    const link = document.createElement('a');
    link.href = '/Propuesta_Qubik_Shopify.pdf';
    link.download = 'Propuesta_Qubik_Shopify.pdf';
    link.click();
  }
}
