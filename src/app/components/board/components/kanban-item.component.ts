import { Component, computed, input } from '@angular/core';
import { KanbanItem } from '../../../models/kanban.interface';

const statusMapperColors = {
  Medium: 'bg-yellow-200',
  High: 'bg-red-200',
  Low: 'bg-green-200',
};

// const statusMapperText = {
//   Medium: 'Media',
//   High: 'Alta',
//   Low: 'Baja',
// };

@Component({
  selector: 'app-kanban-item',
  template: `
    <div class="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer">
      @let ticket = item();

      <p class="font-semibold mb-4">{{ ticket.title }}</p>

      <p class="text-sm">{{ ticket.description }}</p>

      <div class="flex justify-end">
        <div
          style="background-color: #dbdbff;"
          class="px-4 py-1 rounded-full mt-4"
        >
          <span>{{ statusText() }}</span>
        </div>
      </div>
    </div>
  `,
})
export class KanbanItemComponent {
  item = input.required<KanbanItem>();
  statusText = computed(() => {
    return this.item().client;
  });
}
