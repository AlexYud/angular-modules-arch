import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() items: any[] = [];
  openedItemIndex = 0;

  onClick(index: number) {
    if (index === this.openedItemIndex) return this.openedItemIndex = -1;
    return this.openedItemIndex = index;
  }
}
