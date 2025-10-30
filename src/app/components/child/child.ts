import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>{{ message }}</p>
    <button (click)="clicked.emit()">Click Me</button>
  `
})
export class ChildComponent {
  @Input() message!: string;
  @Output() clicked = new EventEmitter<void>();
}

