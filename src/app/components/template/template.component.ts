import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TEMPLATES_DATA } from './data';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-template',
  imports: [CommonModule, ModalComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  activeFilter = 'all';
  searchQuery = '';

  templates = TEMPLATES_DATA;

  get filteredTemplates() {
    return this.templates.filter((t) => {
      const matchFilter =
        this.activeFilter === 'all' || t.filters.includes(this.activeFilter);

      const query = this.searchQuery.toLowerCase();

      const matchSearch =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query);

      return matchFilter && matchSearch;
    });
  }

  isModalOpen = false;

  selectedTemplate: any = null;

  verTemplate(template: any): void {
    this.selectedTemplate = template;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
