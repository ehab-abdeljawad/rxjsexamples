import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `<div class="tooltip">Hello from the overlay!</div>`,
  styles: [`
    .tooltip {
      background-color: white;
      border: 1px solid #ccc;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
  `]
})
export class TooltipComponent {}
